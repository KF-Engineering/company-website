
import React from 'react';
import './Topbar.scss';
import { Person , Mail } from '@material-ui/icons';
import {Navbar, Container, Nav, NavDropdown}  from  'react-bootstrap';



function Topbar({ menuOpen, setMenuOpen}) {
    return (
        <div className="topbar">
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#about">Tinhat.</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#members">Engineers</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
  
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>




        </div>



    )
}

export default Topbar
