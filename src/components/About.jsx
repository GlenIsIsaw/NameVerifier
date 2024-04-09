import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../styles/About.css";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Container className="mt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start from slightly below to create fade-up effect
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="title-page">About Us</div>
      </motion.div>

      <div className="clearfix">
        <img
          src="./images/433001501_390562857086117_1185920196191064819_n-removebg-preview.webp"
          className="col-md-4 float-md-end ms-md-3 img-fluid image rounded-3"
          alt="Congresswoman Rosemarie Conejos Panotes"
          loading="lazy"
        />
        <p className="welcome-text lh-lg">
          <span className="Name">Congresswoman Rosemarie Panotes</span> is a
          dedicated public servant known for her unwavering commitment to her
          constituents and her tireless advocacy for their needs. Representing
          her district with integrity and passion, Congresswoman Panotes has
          been instrumental in advancing legislation that addresses pressing
          issues such as healthcare, education, and economic development.
          Padagos Lang is a website established by the team of Congresswoman
          Rosemarie Panotes aimed at fostering greater transparency and
          communication between her office and the community. Through Padagos
          Lang, constituents can access important information about legislation,
          upcoming events, and resources available to them. The website also
          provides a platform for constituents to voice their concerns and
          provide feedback, allowing for a more inclusive and responsive
          approach to governance. With Padagos Lang, Congresswoman Panotes
          continues to demonstrate her commitment to serving the people and
          ensuring their voices are heard.
        </p>
      </div>
      <div className="title-page mt-4" data-aos="fade-right">
        About developer
      </div>

      <p className="welcome-text lh-lg">
        The developer behind the Padagos Lang website is a skilled and
        innovative individual dedicated to leveraging technology for the
        betterment of communities. With a passion for web development and a
        commitment to civic engagement, they worked closely with Congresswoman
        Rosemarie Panotes to bring Padagos Lang to life. Their expertise in
        coding, design, and user experience has resulted in a user-friendly
        platform that facilitates transparent communication between constituents
        and their representative. Through their efforts, they have empowered
        constituents to stay informed, engaged, and connected with their
        government, contributing to a more inclusive and participatory
        democracy.
      </p>
    </Container>
  );
};

export default About;
