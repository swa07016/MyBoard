import React, { useState } from 'react';
import './NavigationBar.css'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Input,
  Label,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';



class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen});

  render() {
    return (
      <div>
        <Navbar className="NavigationBar" light expand="md">
          <NavbarBrand href="/">My Board</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              
             
                

              <NavItem>
                <Button color="link" onClick={this.props.LogoutHandler}>Logout</Button>{''}
              </NavItem>


            </Nav>
            <NavbarText className="Search" >
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Search"
              />
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}

export default Navigation;