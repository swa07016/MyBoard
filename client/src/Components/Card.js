import React from 'react';
import './Card.css';
import {
  Card, CardTitle, Col, CardBody, CardHeader, Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <Col sm="3">
        <div>
          <Card className="Card hover_animation" onClick={this.toggle}>
            <CardHeader className="CardHeader">{this.props.word}</CardHeader>
            <CardBody className="CardBody">
              <CardTitle>Writer : {this.props.writer}</CardTitle>
              <CardTitle>Date : {this.props.date}</CardTitle>
              <CardTitle>Likes : {this.props.Likes}</CardTitle>
            </CardBody>
          </Card>
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>{this.props.word}</ModalHeader>
            <ModalBody >{this.props.meaning}</ModalBody>
            <ModalFooter>
              좋아요 기능 만들기
            </ModalFooter>
          </Modal>

        </div>
      </Col>
    );
  }
};

export default Example;