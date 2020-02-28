import React from 'react';
import { CardHeader, CardBody, CardFooter, Col, Card, Button, Input, Label,
    Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            pw: '',
            joinName: '',
            joinPw: '',
            joinSecretKey: '',
        }
    }

    toggle = () => this.setState({modal: !this.state.modal});

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
      }

    
      handleLoginSubmit = (e) => {
        e.preventDefault();
        const url = '/login';
        let data = {
            name: this.state.name,
            pw: this.state.pw,
            
        }
        let xhr = new XMLHttpRequest();
        
        xhr.onload = () => {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200 || xhr.status === 201) {
                    let res = JSON.parse(xhr.responseText);
                    if(res.code === 'yes') {
                        this.props.isLoginChange(this.state.name);
                    }
                    else if(res.code === 'no') {
                        alert('로그인에 실패하였습니다.');
                    }
                } else {
                    console.error(xhr.responseText);
                }
              }
        }
        
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data));
      }

      handleJoinSubmit = (e) => {
        e.preventDefault();
        const url = '/join';
        let data = {
            joinName: this.state.joinName,
            joinPw: this.state.joinPw,
            joinSecretKey: this.state.joinSecretKey
        }
        let xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200 || xhr.status === 201) {
                    let res = JSON.parse(xhr.responseText);
                    if(res.code === 'invalid') {
                        alert('유효하지 않은 시크릿키입니다.');
                    }
                    else if (res.code === 'exist') {
                        alert('이미 존재하는 회원입니다.');
                    }
                    else if(res.code === 'ok') {
                        alert('회원가입에 성공하였습니다.');
                    }
                } else {
                    console.error(xhr.responseText);
                }
              }
        }
        
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data));
      }
 
    render() {
        return (
           
            <div className="LoginCard">
            <Col sm = "3" className="inCard">
                <Card className="Shadow">
                    
                    
                    <CardHeader>Login!</CardHeader>
                    <CardBody>
                        <Label for="inputName">Name</Label>
                        <Input type="name" name="name" id="inputName" 
                            value={this.state.name} onChange={this.handleValueChange}
                        />
                        <Label for="inputPw">Password</Label>
                        <Input type="password" name="pw" id="inputPw"
                            value={this.state.pw} onChange={this.handleValueChange}
                        /> 
                    </CardBody>


                    <CardFooter>
                        <Button color="primary" onClick={this.handleLoginSubmit}>Submit</Button>
                        


                        <Button color="link" onClick={this.toggle}>Join</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Join!</ModalHeader>
                            <ModalBody>
                                <Label for="joinName">Name</Label>
                                <Input type="name" name="joinName" id="joinName" 
                                 value={this.state.joinName} onChange={this.handleValueChange}/>
                                <Label for="joinPw">Password</Label>
                                <Input type="password" name="joinPw" id="joinPw" 
                                value={this.state.joinPw} onChange={this.handleValueChange}/>
                                <Label for="joinSecretKey">Secret Key</Label>
                                <Input type="password" name="joinSecretKey" id="joinSecretKey" 
                                value={this.state.joinSecretKey} onChange={this.handleValueChange}/>

                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={this.handleJoinSubmit}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </CardFooter>
                    </Card>       
                </Col>
            </div>
            
        )
    }

}

export default Login;