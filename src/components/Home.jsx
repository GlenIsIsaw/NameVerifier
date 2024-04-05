import React from "react";
import "../styles/Home.css";
import { Container } from "react-bootstrap";
import CardHome from "./CardHome";
import SocialsMedia from "./SocialsMedia";
import Announcement from "./Announcement";

const Home = () => {
  return (
    <Container>
      <img src="./images/HeroBanner.webp" className="img-fluid" alt="..." />

      <div className="clearfix mt-4">
        <img
          src="./images/CongRoseMarie.webp"
          className="col-md-4 float-md-end ms-md-3 img-fluid"
          alt="Congresswoman Rosemarie Conejos Panotes"
        />
        <p className="home-title-page">WELCOME</p>
        <p className="welcome-text">
          A paragraph of placeholder text. We're using it here to show the use
          of the clearfix class. We're adding quite a few meaningless phrases
          here to demonstrate how the columns interact here with the floated
          image.
        </p>

        <p className="welcome-text">
          As you can see the paragraphs gracefully wrap around the floated
          image. Now imagine how this would look with some actual content in
          here, rather than just this boring placeholder text that goes on and
          on, but actually conveys no tangible information at. It simply takes
          up space and should not really be read.
        </p>

        <p className="welcome-text">
          And yet, here you are, still persevering in reading this placeholder
          text, hoping for some more insights, or some hidden easter egg of
          content. A joke, perhaps. Unfortunately, there's none of that here.
        </p>
      </div>
      <CardHome />
      <div className="row justify-content-md-center">
      <div className="col-lg-4 mt-5">
      <SocialsMedia />
      </div>
      <div className="col-sm">
      <Announcement />
      </div>
      </div>
    </Container>
  );
};

export default Home;
