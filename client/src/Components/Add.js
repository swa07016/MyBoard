import React from 'react';
import './Add.css';
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
      Likes: 0,
    }
  }


  toggle = () => this.setState({ modal: !this.state.modal });
  
  handleAdd = (e) => {
    e.preventDefault();
   
    const url = '/api/addCard';
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
    
    let data = {
      word: this.state.word,
      meaning: this.state.meaning,
      writer: this.props.writer,
      Likes: this.state.Likes,
      date: today
    }

    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.readyState === xhr.DONE) {
          if (xhr.status === 200 || xhr.status === 201) {
              let res = JSON.parse(xhr.responseText);
              if(res.code === 'exist') {
                alert('이미 존재하는 단어입니다.');
              }
              else if(res.code === 'ok') {
              
                  // 실시간 반영 문제 ... 
                this.props.addHandler(this.props.writer);
                this.setState({
                  modal: false,
                  word: "",
                  meaning: "",
                  Likes: 0,
                })
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

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
 
  handleCancel = () => {
    this.setState({
      modal: false,
      word: "",
      meaning: "",
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
                <Input type="title" name="word" id="inputWord" value={this.state.word} onChange={this.handleValueChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="inputMeaning">Meaning</Label>
                <Input rows="5" type="textarea" name="meaning" id="inputMeaning" value={this.state.meaning} onChange={this.handleValueChange}/>
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