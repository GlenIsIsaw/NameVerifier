import React from 'react';
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">
            Padagos Lang
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header