import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <img src="./images/HeroBanner.webp" className="img-fluid" alt="..." />
      <div className="mt-5">
        <Card style={{ width: "18rem" }} className="mx-auto">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="title-page">WELCOME</div>
    </Container>
  );
};

export default Home;
