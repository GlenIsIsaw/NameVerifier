import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const announcement = () => {
  return (
    <Container>
    <div className=" mt-5 shadow-lg">
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </div>
    <div className=" mt-3 shadow-lg">
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </div>
    <div className=" mt-3 shadow-lg">
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </div>
    <div className=" mt-3 shadow-lg">
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </div>
    </Container>
  );
};

export default announcement;
