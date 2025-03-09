import React from "react";
import {Button, Container } from "react-bootstrap";
import "../../styles/GroupButtons.css";
import "../../styles/Check.css";

const Group_Buttons = () => {
  return (
    <Container>
    <div className="d-grid gap-2">
      <h4>
        <div className="spann sub-title">First Schedule</div>
      </h4>
      <Button variant="success" className="custom-text" size="lg" href="/FirstDay">
        March 11, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" href="/SecondDay">
        March 12, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" href="/ThirdDay">
        March 13, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" href="/FourthDay">
        March 14, 2025
      </Button>
      </div>
      
      <div className="d-grid gap-2 mt-3">
      <h4>
        <div className="spann sub-title">TBA</div>
      </h4>
      <Button variant="success" className="custom-text" size="lg" disabled>
        TBA
      </Button>
      <Button variant="success" className="custom-text" size="lg" disabled>
      TBA
      </Button>
      <Button variant="success" className="custom-text" size="lg" disabled>
      TBA
      </Button>
      <Button variant="success" className="custom-text" size="lg" disabled>
      TBA
      </Button>
    </div>
    </Container>
  );
};

export default Group_Buttons;
