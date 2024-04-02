import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';

function Header() {
  return (

    <Navbar expand="sm" className="bg-body-tertiary shadow-lg py-3">
      <Container>
      <Nav.Link href="/">
      <img
              alt=""
              src="/images/LogoPadagosLang.webp"
              width="200"
              height="50"
              className="d-inline-block align-top"
            />{' '}</Nav.Link> 
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border border-success border-3"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href="/" className="text-uppercase mx-2 link-font">
              Home
            </Nav.Link>
            <Nav.Link href="/about"  className="text-uppercase mx-2 link-font">
              About
            </Nav.Link>
            <Nav.Link href="/Faq"  className="text-uppercase mx-2 link-font">
             FAQs
            </Nav.Link>
            <Button href="/Check" variant="outline-success text-uppercase fw-bold mx-2">Verify Now</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
