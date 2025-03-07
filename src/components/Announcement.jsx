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
              Educational Assistance 2025 Result
            </Card.Title>
            <Card.Text>
              Coming soon.
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
              bantayong festival 2025
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
              RSCUAA 2025
            </Card.Title>
            <Card.Text>
              Buo po ang ating suporta sa ating mga atleta mula sa Camarines
              Norte State College para sa kanilang pagsabak sa regional
              competition bitbit ang dangal at talento ng mga CamNorteño. <br /> <br />
              Padagos lang! 💪🏻 <br /> <br /> #PadagosLang <br />
              #siROSEMARIEangPANOTESko
            </Card.Text>
            <Button
              variant="success"
              className="text-uppercase fw-bold"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Congwrosemarie/posts/pfbid02K64Kst45s7dBsk8mMKNa8kj3oxcEYuAym8yjBLic86Nj4siEnSs1v8dzXU4BVSZl"
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
