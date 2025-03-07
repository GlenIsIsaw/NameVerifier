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
                  src="./images/480471160_607343815408019_7713107544049122264_n.webp"
                  loading="lazy"
                />
              </motion.div>
              <Card.Body>
                <Card.Title className="card-title-text fw-bold">
                  Barangay Visitation
                </Card.Title>
                <Card.Text>
                  Maraming salamat po sa inyong mainit na pagtanggap sa inyong
                  lingkod at padagos na pagsuporta sa ating Barangay Visitation
                  program mula noon, hanggang ngayon.
                </Card.Text>
                <Button
                  variant="success"
                  className="text-uppercase fw-bold shadow-lg"
                  href="https://www.facebook.com/photo/?fbid=607343808741353&set=a.361228380019565"
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
                  src="./images/481127049_612614978214236_1905674662345404496_n.webp"
                  loading="lazy"
                />
              </motion.div>
              <Card.Body>
                <Card.Title className="card-title-text fw-bold">
                  Number 3 sa balota. 💚
                </Card.Title>
                <Card.Text className="card-text">
                  Para sa PADAGOS na SERBISYONG PANOTES sa Ikalawang Distrito ng
                  Camarines Norte. TUNAY at TOTOO. Mula NOON hanggang NGAYON.
                  Padagos lang po tayo!
                </Card.Text>
                <Button
                  variant="success"
                  className="text-uppercase fw-bold shadow-lg"
                  href="https://www.facebook.com/photo/?fbid=612614971547570&set=a.215754907900247"
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
