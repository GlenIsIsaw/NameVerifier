import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import {
  Container,
  Navbar,
  Nav,
  Button,
  OverlayTrigger,
  Tooltip,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // Adjusted for better responsiveness

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar expand="lg" className="bg-white shadow-lg sticky-top py-3">
      <Container>
        {/* Logo */}
        <Link to="/">
          <img
            alt=""
            src="/images/435311166_396549496487453_1076776077106079376_n.webp"
            width="200"
            height="50"
            className="d-inline-block align-top"
          />
        </Link>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            {/* Navigation Links */}
            <Link
              to="/"
              className="nav-link text-uppercase fw-semibold link-font"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="nav-link text-uppercase fw-semibold link-font"
            >
              About
            </Link>
            <Link
              to="/Faq"
              className="nav-link text-uppercase fw-semibold link-font"
            >
              FAQs
            </Link>

            {/* Responsive Hoverable Dropdown */}
            <Dropdown
              onMouseEnter={!isMobile ? () => setShowDropdown(true) : null}
              onMouseLeave={!isMobile ? () => setShowDropdown(false) : null}
              onClick={isMobile ? () => setShowDropdown(!showDropdown) : null}
              show={showDropdown}
            >
              <Dropdown.Toggle
                variant="outline-success"
                className="text-uppercase fw-bold mx-3 border-0 shadow-sm px-3"
              >
                Programs
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown">
                <Dropdown.Item as={Link} to="/NameChecker">
                  📖 Educational Assistance
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Akap" disabled>
                  🔹AKAP{" "}
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="https://econgress.gov.ph/house-members/?id=212&views=authoredbills"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐 E-Congress
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Educational Assistance Button 
            <OverlayTrigger
              placement="bottom"
<<<<<<< HEAD
              overlay={<Tooltip id={`tooltip-disabled`}>Educational Assistance</Tooltip>}
            >
              <span className="d-inline-block">
                <Button href="/NameChecker" variant="success" className="text-uppercase fw-bold px-4 shadow-sm">
=======
              overlay={
                <Tooltip id={`tooltip-disabled`}>
                  Educational Assistance
                </Tooltip>
              }
            >
              <span className="d-inline-block">
                <Button
                  href="/NameChecker"
                  variant="outline-success text-uppercase fw-bold mx-3"
                >
>>>>>>> 025a3611cd08d93cddc4b0a1edaba791391197f8
                  Educational Assistance
                </Button>
              </span>
            </OverlayTrigger>
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
