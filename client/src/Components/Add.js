import React, { useState } from 'react';
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

const Add = (props) => {
  const {
    buttonLabel = "+",
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="AddButton" color="primary" size="lg" onClick={toggle} >{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Fill in the blanks</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="inputWord">Word</Label>
              <Input type="title" name="text" id="inputWord" />
            </FormGroup>
            <FormGroup>
              <Label for="inputMeaning">Meaning</Label>
              <Input rows="5" className="meaningText" type="textarea" name="text" id="inputMeaning"/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Add;