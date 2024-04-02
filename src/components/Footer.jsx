import React from 'react';
import "./Footer.css";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container>
 <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/About" className="nav-link px-2 text-body-secondary">About</a></li>
      <li className="nav-item"><a href="/Faq" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="/Check" className="nav-link px-2 text-body-secondary">Verify Now</a></li>
    </ul>
    <p className="text-center text-body-secondary">&copy; 2024 <span className='text-uppercase footer-font'>Powered and Developed by Glen Pabico</span></p>
  </footer>
  </Container>
  )
}

export default Footer
