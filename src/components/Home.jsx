import React, { useEffect } from "react";
import "../styles/Home.css";
import { Container } from "react-bootstrap";
import CardHome from "./CardHome";
import SocialsMedia from "./SocialsMedia";
import Announcement from "./Announcement";
import Banner from "./Banner";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Container>
        <img
          src="./images/HeroBanner.webp"
          className="img-fluid"
          alt="Padagos Lang"
          loading="lazy"
        />

        <div className="clearfix mt-4">
          <img
            src="./images/CongRoseMarie.webp"
            className="col-md-4 float-md-end ms-md-3 img-fluid  image"
            alt="Congresswoman Rosemarie Conejos Panotes"
            data-aos="fade-left"
            loading="lazy"
          />
          <p className="home-title-page" data-aos="fade-right">
            WELCOME
          </p>
          <p className="welcome-text lh-lg">
            Greetings from Congresswoman Rosemarie Panotes' virtual residence!
            You'll find a wealth of knowledge about Congresswoman Panotes and
            her unwavering commitment to helping the people she represents as
            you browse our website. Every facet of Congresswoman Panotes's work,
            from her legislative agenda to her history detailing her road to
            public service, is painstakingly described here. You'll discover the
            materials you need to keep informed and involved, whether you're a
            constituent in need of assistance or a curious bystander looking to
            learn more about her activity.
          </p>

          <p className="welcome-text lh-lg">
            Our website acts as an active medium for openness and usability.
            Here, you may learn about the most recent information and
            developments on Congresswoman Panotes's actions in the legislature
            as well as her participation in regional affairs and community
            projects. You'll also be able to explore her position on important
            policy issues, such as economic development, environmental
            sustainability, healthcare, and education. Since we think that a
            well-informed public is crucial to a healthy democracy, this website
            aims to arm you with the information you need to take an active role
            in the political process.
          </p>

          <p className="welcome-text lh-lg">
            We sincerely thank you for visiting the official website of
            Congresswoman Rosemarie Panotes. We're here to help, whether you
            need help with a government agency, want to voice your concerns, or
            just want to know more about Congresswoman Panotes's goals for our
            district. Your participation and input are really helpful as we
            collaborate to create a more promising future for our country and
            community. Thank you for joining us on this journey of progress and
            collaboration.
          </p>

          <div className="message-name " data-aos="fade-up">
            Hon. Rosemarie C. Panotes <br />{" "}
            <p className="message-name-position">
              District Representative Camarines Norte, 2nd District
            </p>
          </div>
        </div>
      </Container>

      <Banner />

      <CardHome />

      <Container>
        <div className="row justify-content-md-center mt-5">
          <div className="col-lg-4 mt-4">
            <div className="secondary-title">Social Media</div>
            <SocialsMedia />
          </div>
          <div className="col-sm">
            <div className="secondary-title mt-4">Announcement</div>
            <Announcement />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
