const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const data2 = fs.readFileSync('./secretKey.json');
const skf = JSON.parse(data2);


const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
    
connection.connect();
    




// cards api
app.get('/api/cards', (req, res) => {
    connection.query(
        'SELECT * FROM CARD',
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})


// add 처리 


// login 처리
app.post('/login', (req, res) => {
    let l_name = req.body.name;
    let l_pw = req.body.pw;
    const qry = `SELECT * FROM USER WHERE name='${l_name}' AND pw='${l_pw}'`;
    connection.query(qry, (err, rows, fields) => {
        if(rows.length) res.send({'l_name': l_name, 'code':'yes'});
        else res.send({'l_name': l_name, 'code':'no'});
    });
})


//join 처리
app.post('/join', (req, res) => {
    let j_name = req.body.joinName;
    let j_pw = req.body.joinPw;
    let j_secretKey = req.body.joinSecretKey;
    const qry = `SELECT * FROM USER WHERE name='${j_name}'`;
    const sql = `INSERT INTO USER VALUES (null, ?, ?)`
    let params = [j_name, j_pw];
    
    connection.query(qry, (err, rows, fields) => {
        
        if(j_secretKey !== skf.SecretKey) {
            res.send({'code':'invalid'});
        }
        else {
            if(rows.length) res.send({'code':'exist'});
            else {
                connection.query(sql, params);
                res.send({'code':'ok'});
            }
        }
    });


})


app.listen(port, () => console.log(`Listening on port ${port}`));