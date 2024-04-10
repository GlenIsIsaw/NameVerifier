import React from "react";
import { Spinner, Container } from "react-bootstrap";
import "../styles/DataModal.css";

const Loading = () => {
  return (
    <Container>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 text-center">
          <Spinner animation="border" variant="success" className="me-3" />
          <div className="mt-3 modal-text text-center text-capitalize">
            Please wait, as we load the content for you.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
