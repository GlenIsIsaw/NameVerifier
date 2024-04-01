import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary shadow-lg py-3">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border border-0"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Home" className="text-uppercase mx-2 link-font">
              Home
            </Nav.Link>
            <Nav.Link href="#About" className="text-uppercase mx-2 link-font">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
