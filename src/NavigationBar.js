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
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
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
          <NavbarText>user name</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;