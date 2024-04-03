import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary shadow-lg sticky-top">
      <Container>
        <Link to="/">
          <img
            alt=""
            src="/images/LogoPadagosLang.webp"
            width="200"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border border-success border-3"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="text-decoration-none">
              <li className="text-uppercase mx-3 py-2 link-font">Home</li>
            </Link>
            <Link to="/About" className="text-decoration-none">
              {" "}
              <li className="text-uppercase mx-3 py-2 link-font">About</li>
            </Link>
            <Link to="/Faq" className="text-decoration-none">
              <li className="text-uppercase mx-3 py-2 link-font">FAQs</li>
            </Link>
            <Button
              href="/Check"
              variant="outline-success text-uppercase fw-bold mx-3"
            >
              Check Application
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
