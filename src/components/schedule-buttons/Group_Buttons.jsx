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
      <Button variant="success" className="custom-text" size="lg" disabled href="/FirstDay">
        March 11, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" disabled href="/SecondDay">
        March 12, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" disabled href="/ThirdDay">
        March 13, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" disabled href="/FourthDay">
        March 14, 2025
      </Button>
      </div>
      
      <div className="d-grid gap-2 mt-3">
      <h4>
        <div className="spann sub-title">Second Schedule</div>
      </h4>
      <Button variant="success" className="custom-text" size="lg" disabled>
        March 18, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" disabled>
        March 19, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" disabled>
        March 20, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" disabled>
        March 21, 2025
      </Button>
    </div>
    </Container>
  );
};

export default Group_Buttons;
