const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/cards', (req, res) => {
    res.send([
        {
            "word": "hello",
            "writer": "정성훈",
            "date": "2020/02/27",
            "Likes": 0,
            "meaning": "안녕하세요"
        },
        {
            "word": "hello",
            "writer": "정성훈",
            "date": "2020/02/27",
            "Likes": 0,
            "meaning": "안녕하세요"
        },
        {
            "word": "hello",
            "writer": "정성훈",
            "date": "2020/02/27",
            "Likes": 0,
            "meaning": "안녕하세요"
        }
    ])
})


app.listen(port, () => console.log(`Listening on port ${port}`));