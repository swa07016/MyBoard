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
  FormGroup,
  Input
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="NavigationBar" light expand="md">
        <NavbarBrand href="/">My Board</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Button color="link">Join</Button>{''}
            </NavItem>
            <NavItem>
              <Button color="link">Login</Button>{''}
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

export default Navigation;