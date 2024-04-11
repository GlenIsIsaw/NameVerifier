import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <Container>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <Link to="/" className="text-decoration-none">
            <li className="nav-item nav-link px-2 text-body-secondary">Home</li>
          </Link>
          <Link to="/About" className="text-decoration-none">
            <li className="nav-item nav-link px-2 text-body-secondary">
              About Us
            </li>
          </Link>
          <Link to="/Faq" className="text-decoration-none">
            <li className="nav-item nav-link px-2 text-body-secondary">FAQs</li>
          </Link>
          <Link to="/NameChecker" className="text-decoration-none">
            <li className="nav-item nav-link px-2 text-body-secondary">
              Check My Name
            </li>
          </Link>
        </ul>
        <p className="text-center text-body-secondary">
          &copy; 2024{" "}
          <span className="text-uppercase footer-font">
            Powered and Developed by Glen
          </span>
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
