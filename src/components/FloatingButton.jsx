import React, { useState } from "react";
import "../styles/FloatingButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

const FloatingButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div>
      <OverlayTrigger
        key="tooltip"
        placement="left"
        overlay={
          <Tooltip id={`tooltip-left`}>Documentary Requirements</Tooltip>
        }
      >
        <button className="floating-button" onClick={handleModalOpen}>
          <FontAwesomeIcon icon={faNoteSticky} />
        </button>
      </OverlayTrigger>

      <Modal className="mx-auto" show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-uppercase">
            Documentary Requirements
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-text">
            Please bring the following requirements for your Educational
            Assistance PAY-OUT:
          </p>
          <ol className="list-group mt-3 border border-2 border-dark list-group-numbered">
            <li className="list-group-item border border-2 border-dark modal-text">
              Photocopy back to back of School ID validated by the Registrar and
              must be <strong>CERTIFIED TRUE COPY </strong> for (2nd) Second
              Semester, Academic Year 2023-2024.{" "}
            </li>
            <li className="list-group-item border border-2 border-dark modal-text">
              If the student have no School ID yet, Barangay ID and Voter's
              Certification is accepted along with the other valid Government
              IDs.
            </li>
            <li className="list-group-item border border-2 border-dark modal-text">
              Original Certificate of Enrollment or Certificate of Registration
              for{" "}
              <strong>(2nd) Second Semester, Academic Year 2023-2024 </strong>.
              originally signed by the registrar.{" "}
            </li>
            <li className="list-group-item border border-2 border-dark modal-text">
              If the student only has a photocopy of COE or COR, see to it that
              it is certified true copy by the school originally signed by the
              registrar. <br /> <br />
              <strong className="text-uppercase">
                (Purpose: Educational Assistance)
              </strong>
            </li>
            <li className="list-group-item border border-2 border-dark modal-text">
              If the registrar is not around and only had an authorized person
              to sign the said documents, name and designation of the signee is
              must.
            </li>
          </ol>
          <p className="modal-text mt-3 fw-bold text-uppercase">
            BRING YOUR PHYSICAL SCHOOL ID or VALID ID DURING PAY-OUT
          </p>{" "}
          <p className="modal-text fw-bold">
            If the student are not available due to some personal matters, the
            guardian or parents can claim the assistance provided with
            authorization letter from the student with Valid ID. Said
            authorization must originally signed by the student same with the
            signature in the presented valid ID Authorization person must be
            immediate relative of the student (parents and/or siblings).
          </p>{" "}
          <p className="modal-text fw-bold text-success">
            You may see the OFFICIAL LIST OF NAMES for your schedule at 2nd
            floor, Office of the House of Representatives (Office of
            Congresswoman Rosemarie "Ate Rose" Panotes), Provincial Capitol
            Building, Daet, Camarines Norte.{" "}
          </p>{" "}
          <p className="modal-text">
            Please, provide the correct and necessary requirements that we ask
            you to bring on the schedule of your pay-out. Thankyou! Also please
            bring your own snack, drinks and ballpen during pay-out. Thank you.
          </p>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FloatingButton;
