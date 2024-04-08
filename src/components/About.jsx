import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../styles/About.css";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start from slightly below to create fade-up effect
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="mt-5">
        <div className="title-page">About Us</div>
      </Container>
    </motion.div>
  );
};

export default About;
