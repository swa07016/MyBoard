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

  clickDelete = (e) => {
    
    e.preventDefault();

    const url = '/api/deleteCard';
    let data = {
      currentUser: this.props.currentUser,
      word: this.props.word,
      meaning: this.props.meaning,
      writer: this.props.writer,
      Likes: this.props.Likes,
      date: this.props.date
    }

    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.readyState === xhr.DONE) {
          if (xhr.status === 200 || xhr.status === 201) {
              let res = JSON.parse(xhr.responseText);
              if(res.code === 'invalid') {
                alert('자신이 쓴 단어만 삭제할 수 있습니다.');
              }
              else if(res.code === 'ok') {
                this.props.stateRefresh();  
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
              <Button color="warning" onClick={this.clickDelete}>Delete</Button>
              좋아요 기능 만들기
            </ModalFooter>
          </Modal>
        </div>
      </Col>
    );
  }
};

export default Example;