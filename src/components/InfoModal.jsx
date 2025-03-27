import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/Check.css";

const InfoModal = ({ show, handleClose }) => {
  const [countdown, setCountdown] = useState(5);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (show) {
      setCountdown(7);
      setIsButtonDisabled(true);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setIsButtonDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title className="fw-bold text-uppercase">
          Important Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="modal-text">
          The list of names are based on the <strong>cross-matching and validation</strong> by the <strong>DSWD</strong>.</p>
          
          <p className="modal-text"> Please check your personal details and schedule here. If some details
          are wrong, such as <strong>misspelled names</strong>,{" "}
          <strong>incorrect address</strong>, or <strong>wrong birthday</strong>
          , please approach our staff for your concern to be subject for <strong>re-schedule</strong>.
        </p>
        <p className="modal-text">
          <strong>DSWD</strong> as our partner agency strictly implements the{" "}
          <strong>8:00 AM to 5:00 PM</strong> time slot. Be present during your
          scheduled time.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          className="mx-auto d-block"
          onClick={handleClose}
          disabled={isButtonDisabled}
        >
          I Understand {isButtonDisabled ? `(${countdown})` : ""}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
