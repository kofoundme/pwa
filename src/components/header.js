// Module imports
import React, { Component } from 'react';
import {
  Navbar, Nav, Form, Button, Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Asset imports
import icon from 'assets/img/icon.png';
import logo from 'assets/img/logo.png';

// Start && Export Component
export default class Header extends Component {
  render = () => (
    <header id="header">
      <Navbar bg="white" expand="lg" fixed="top">
        <Container>
          <Link to="/" className="navbar-brand">
            <picture>
              <source media="(min-width:768px)" srcSet={`${logo} 1.2x`} />
              <source srcSet={`${icon} 12x`} />
              <img src={icon} alt="KoFoundMe Logo" className="d-inline-block align-top" />
            </picture>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-3">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#how-it-works">How it Works</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <Link to="/login">
                <Button variant="primary" className="mr-2 btn-primary-kofoundme">
                  Login
                </Button>
              </Link>
              <Link to="/register"><Button variant="danger">Register</Button></Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
