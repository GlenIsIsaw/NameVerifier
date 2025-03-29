import React from "react";
import {Button, Container } from "react-bootstrap";
import "../../styles/GroupButtons.css";
import "../../styles/Check.css";

const Group_Buttons = () => {
  return (
    <Container>
    <div className="d-grid gap-2">
      <h4 style={{ display: 'none' }}>
        <div className="spann sub-title" style={{ display: 'none' }} >First Schedule</div>
      </h4>
      <Button variant="success" className="custom-text" size="lg" href="/FirstDay" style={{ display: 'none' }} disabled>
        March 28, 2025 | 8:00 A.M - 5:00 P.M ONLY
      </Button>
      <Button variant="success" className="custom-text" size="lg" href="/SecondDay" style={{ display: 'none' }} disabled>
        March 12, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" href="/ThirdDay" style={{ display: 'none' }} disabled>
        March 13, 2025
      </Button>
      <Button variant="success" className="custom-text" size="lg" href="/FourthDay" style={{ display: 'none' }} disabled>
        March 14, 2025
      </Button> 
      </div>
      
      <div className="d-grid gap-2 mt-3">
      <h4 style={{ display: 'none' }}>
        <div className="spann sub-title" style={{ display: 'none' }} >Second Schedule</div>
      </h4>
      <Button variant="success" className="custom-text" size="lg" href="/FifthDay" style={{ display: 'none' }} disabled>
        March 18, 2025 | 8:00 AM - 5:00 PM ONLY
      </Button>
      <Button variant="success" className="custom-text" size="lg" href="/SixthDay" style={{ display: 'none' }} disabled>
      March 19, 2025 | 8:00 AM - 5:00 PM ONLY
      </Button>
      <Button variant="success" className="custom-text" size="lg" href="/SeventhDay" style={{ display: 'none' }} disabled>
      March 20, 2025 | 8:00 AM - 5:00 PM ONLY
      </Button>
      <Button variant="success" className="custom-text" size="lg" href="/EightDay" style={{ display: 'none' }} disabled>
      March 21, 2025 | 8:00 AM - 5:00 PM ONLY
      </Button>
    </div>
    </Container>
  );
};

export default Group_Buttons;
