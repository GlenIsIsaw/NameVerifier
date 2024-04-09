import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../styles/DataModal.css";

const DataModal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Hide modal after some time (e.g., 3 seconds)
    const timeout = setTimeout(() => {
      setShowModal(false);
    }, 120000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="text-uppercase fw-bold">
          Data Privacy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="modal-text lh-lg text-center">
          We are committed to upholding the principles of the Data Privacy Act
          of 2012. We ensure that any personal information collected from you is
          used for lawful, ethical, and beneficial purposes only. Our data
          processing practices adhere strictly to the requirements set forth by
          the Data Privacy Act. We collect and process personal information
          solely for the purposes for which it was provided, and we do not use
          it for any other unrelated purposes without obtaining your explicit
          consent. Your personal information is treated with the utmost
          confidentiality and security measures are in place to prevent
          unauthorized access, use, or disclosure. We do not engage in any
          activities that violate your privacy rights or infringe upon your
          personal data. By using our services, you acknowledge and consent to
          the collection, use, and processing of your personal information in
          accordance with the principles outlined in this Privacy Policy and the
          Data Privacy Act of 2012.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowModal(false)}
        >
          I Understand
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default DataModal;
