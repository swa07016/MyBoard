import React from 'react';
import { CardHeader, CardBody, CardFooter, Col, Card, Button, Input, Label,
    Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        return (
            <div className="LoginCard">
            <Col sm = "3" className="inCard">
                <Card className="Shadow">
                    <CardHeader>Login!</CardHeader>
                    <CardBody>
                        <Label for="inputName">Name</Label>
                        <Input type="name" name="name" id="inputName" ></Input>
                        <Label >Password</Label>
                        <Input type="password" name="password" id="inputPw"></Input> 
                    </CardBody>
                    <CardFooter>
                        <Button color="primary">Submit</Button>
                        
                        <Button color="link" onClick={this.toggle}>Join</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Join!</ModalHeader>
                            <ModalBody>
                                <Label for="inputName">Name</Label>
                                <Input type="name" name="text" id="inputName"/>
                                <Label for="inputPw">Password</Label>
                                <Input type="password" name="text" id="inputPw"/>
                                <Label for="inputSecretKey">Secret Key</Label>
                                <Input type="password" name="text" id="inputSecretKey"/>

                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
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