import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


const announcement = () => {
  return (
    <Container>
      <div className="border border-2 border-success rounded-3">
        <Card>
          <Card.Body>
            <Card.Title className="text-uppercase fw-bold">
              Educational Assistance A.Y 2024 - 2025 
            </Card.Title>
            <Card.Text>
              The application for the Educational Assistance A.Y 2024-2025 is now available!
            </Card.Text>
            <Button
              variant="success"
              className="text-uppercase fw-bold"
              href="/NameChecker"
            >
              See more
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-3 border border-2 border-success rounded-3">
        <Card>
          <Card.Body>
            <Card.Title className="text-uppercase fw-bold">
              Pinyasan Festival 2024
            </Card.Title>
            <Card.Text>
              Daet Pinyasan Festival 2024 is full of joy and fun!
            </Card.Text>
            <Button
              variant="success"
              className="text-uppercase fw-bold"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/photo/?fbid=448285921313810&set=pcb.448288254646910"
            >
              See more
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-3 border border-2 border-success rounded-3">
        <Card>
          <Card.Body>
            <Card.Title className="text-uppercase fw-bold">
              Ussap Caravan
            </Card.Title>
            <Card.Text>
              Kasama po sina Gov. Dong Padilla, kaniyang anak na si Anica
              Padilla, at Vice Gov. Engr. Joseph Villaverde Ascutia, padagos po
              tayong nagsagawa ng USSAP sa mga bayan ng San Vicente, Talisay, at
              Vinzons. Ito po ay para masiguro ang Alay sa Diyos at Alay sa
              Bayan na Padagos na serbisyo para sa bawat CamNorteño. 💚
              #PadagosLang
            </Card.Text>
            <Button
              variant="success"
              className="text-uppercase fw-bold"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Congwrosemarie/posts/pfbid02cdGE2tRitbJxLoR2RrN9oLZpr4959tbDYt6W1wrgfBP82ojKb7tQ9BrTQT2wnTZRl"
            >
              See more
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default announcement;
