import React from "react";
import "../styles/Card.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

const CardHome = () => {
  return (
    <CardGroup>
      <Row xs={1} md={3} className="g-4 mt-5">
        <Col>
          <Card className="h-100">
            <Card.Img
              variant="top"
              className="img-size"
              src="./images/433001501_390562857086117_1185920196191064819_n.webp"
            />
            <Card.Body>
              <Card.Title className="card-title-text fw-bold">
                Cong. Rosemarie Panotes
              </Card.Title>
              <Card.Text>
              Ang opisyal na facebook page ni Cong. Ate Rosemarie Conejos Panotes, 2nd District ng Camarines Norte.
              </Card.Text>
              <Button variant="success" className="text-uppercase fw-bold shadow-lg"  href="https://www.facebook.com/Congwrosemarie" >
                See more
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img
              variant="top"
              className="img-size"
              src="./images/434710789_397046489771087_7550260965335097355_n.webp"
            />
            <Card.Body>
              <Card.Title className="card-title-text fw-bold">
                Heat Stroke
              </Card.Title>
              <Card.Text>
              Talaga nga namang summer na dito sa ating bayan ng Camarines Norte! Kaya naman para makaiwas sa heat stroke.
              </Card.Text>
              <Button variant="success" className="text-uppercase fw-bold shadow-lg" href="https://www.facebook.com/photo/?fbid=397046493104420&set=a.361228380019565">
                See more
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img
              variant="top"
              className="img-size"
              src="./images/435311166_396549496487453_107677607710607934_n.webp"
            />
            <Card.Body>
              <Card.Title className="card-title-text fw-bold">
                ph cares medical mission
              </Card.Title>
              <Card.Text className="card-text">
              Padagos lang po tayo sa paghubog sa ating mga kabataan na laging maging handa at magmalasakit para sa kanilang pamayanan. 
              </Card.Text>
              <Button variant="success" className="text-uppercase fw-bold shadow-lg" href="https://www.facebook.com/photo/?fbid=396549499820786&set=pcb.396551439820592">See more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </CardGroup>
  );
};

export default CardHome;
