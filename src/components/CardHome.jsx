import React from "react";
import "../styles/Card.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";

const CardHome = () => {
  return (
    <Container>
      <CardGroup>
        <div className="secondary-title">post and activities</div>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="h-100">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                }}
              >
                <Card.Img
                  variant="top"
                  className="img-size"
                  src="./images/433001501_390562857086117_1185920196191064819_n.webp"
                  loading="lazy"
                />
              </motion.div>
              <Card.Body>
                <Card.Title className="card-title-text fw-bold">
                  Cong. Rosemarie Panotes
                </Card.Title>
                <Card.Text>
                  Ang opisyal na facebook page ni Cong. Ate Rosemarie Conejos
                  Panotes, 2nd District ng Camarines Norte.
                </Card.Text>
                <Button
                  variant="success"
                  className="text-uppercase fw-bold shadow-lg"
                  href="https://www.facebook.com/Congwrosemarie"
                >
                  See more
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                }}
              >
                <Card.Img
                  variant="top"
                  className="img-size"
                  src="./images/443714050_426431533499249_6223413341532710554_n.webp"
                  loading="lazy"
                />
              </motion.div>
              <Card.Body>
                <Card.Title className="card-title-text fw-bold">
                  Barangay Visitation
                </Card.Title>
                <Card.Text>
                  Ang barangay visitation ay sinimulan pa po ng aking mga
                  magulang, at dagos-dagos pa rin hanggang sa ngayon. 
                </Card.Text>
                <Button
                  variant="success"
                  className="text-uppercase fw-bold shadow-lg"
                  href="https://www.facebook.com/photo/?fbid=426432660165803&set=pcb.426441506831585"
                >
                  See more
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                }}
              >
                <Card.Img
                  variant="top"
                  className="img-size"
                  src="./images/445413850_430025096473226_2794847254046351614_n.webp"
                  loading="lazy"
                />
              </motion.div>
              <Card.Body>
                <Card.Title className="card-title-text fw-bold">
                  Serbisyong Padagos Lang!
                </Card.Title>
                <Card.Text className="card-text">
                  Abot-kamay at ramdam na serbisyo—ito ang tatak ng paglilingkod
                  na ipinasa sa akin ng mga magulang ko at padagos na inihahatid
                  sa Segundo Distrito. Padagos lang po tayo! 💚
                </Card.Text>
                <Button
                  variant="success"
                  className="text-uppercase fw-bold shadow-lg"
                  href="https://www.facebook.com/photo/?fbid=445773194898416&set=a.215754907900247"
                >
                  See more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </Container>
  );
};

export default CardHome;
