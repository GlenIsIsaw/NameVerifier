import React from "react";
import "../styles/Home.css";
import { Container } from "react-bootstrap";
import CardHome from "./CardHome";

const Home = () => {
  return (
    <Container>
     
      <img src="./images/HeroBanner.webp" className="img-fluid" alt="..." />
      <div className="title-page mt-5">WELCOME</div>
      <CardHome />
     
    </Container>
  );
};

export default Home;
