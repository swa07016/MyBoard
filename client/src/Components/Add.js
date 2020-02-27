import React, { useState } from 'react';
import './Add.css';
import { post } from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      word: "",
      meaning: "",
      writer: "정성훈",
      Likes: 0,
    }
    this.toggle = this.toggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.addCard = this.addCard.bind(this);
  }


  toggle = () => this.setState({ modal: !this.state.modal });
  
  handleAdd = (e) => {
    e.preventDefault();
    this.addCard()
      .then((response) => {
        console.log(response.data);
        this.props.staeRefresh();
      })
    this.setState({
      modal: false,
      word: "",
      meaning: "",
      writer: "정성훈",
      Likes: 0,
    })
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addCard = () => {
    const url = '/api/addCard';
    const formdata = new FormData();
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = yyyy + '/' + mm +'/'+dd;
    document.write(today);
    
    formdata.append('word', this.state.word);
    formdata.append('meaning', this.state.meaning);
    formdata.append('writer', this.state.wirter);
    formdata.append('Likes', this.state.Likes);
    formdata.append('date', today);

    const config = {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    }
    return post(url, formdata, config);
  }
 
  handleCancel = () => {
    this.setState({
      modal: false,
      word: "",
      meaning: "",
      writer: "정성훈",
      Likes: 0
    }) 
  }

  render() {
    return (
      <div>
        <Button className="AddButton" color="primary" size="lg" onClick={this.toggle} >+</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Fill in the blanks</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="inputWord">Word</Label>
                <Input type="title" name="text" id="inputWord" value={this.state.word} onChange={this.handleValueChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="inputMeaning">Meaning</Label>
                <Input rows="5" className="meaningText" type="textarea" name="text" id="inputMeaning" value={this.state.meaning} onChange={this.handleValueChange}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAdd}>Add</Button>{' '}
            <Button color="secondary" onClick={this.handleCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Add;