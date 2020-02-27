import React, { useState } from 'react';
import './Footer.css';
import {
  Navbar,
  NavLink,
} from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Navbar className="Footer" light expand="md">
        <NavLink className="FooterContent">@2020 Copyright: swa07016</NavLink>
      </Navbar>
    </div>
  );
}

export default Footer;