import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/Check.css";

const PopCard = () => {
  const [showModal, setShowModal] = useState(true);
  const [isCloseEnabled, setIsCloseEnabled] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(countdownInterval);
          setIsCloseEnabled(true);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const handleModalClose = () => {
    if (isCloseEnabled) {
      setShowModal(false);
    }
  };

  return (
    <div>
      <Modal
        className="mx-auto"
        show={showModal}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="fw-bold text-uppercase">
            Documentary Requirements
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-text fw-bold blinking-text fs-6">
            Please read and bring the following requirements for your
            Educational Assistance PAY-OUT:
          </p>
          <ol className="list-group mt-3 border border-2 border-dark list-group-numbered">
            <li className="list-group-item border border-2 border-dark modal-text">
             (<strong>2 copies</strong>) Back to back Photocopy of School ID validated by the Registrar and
              must be <strong>CERTIFIED TRUE COPY </strong> for{" "}
              <strong>(2nd) Second Semester, Academic Year 2024-2025.</strong>
            </li>
            <li className="list-group-item border border-2 border-dark modal-text">
              If the student has no School ID yet, National ID and Voter's
              Certification are also accepted along with the other valid
              Government IDs.
            </li>
            <li className="list-group-item border border-2 border-dark modal-text">
              Original Certificate of Enrollment or Certificate of Registration
              for{" "}
              <strong>(2nd) Second Semester, Academic Year 2024-2025</strong>{" "}
              originally signed by the registrar.
            </li>
            <li className="list-group-item border border-2 border-dark modal-text">
              If the student has only a photocopy of COE or COR, see to it that
              it is certified true copy by the school & originally signed by the
              registrar. <br /> <br />
              <strong className="text-uppercase">
                (Purpose: Educational Assistance)
              </strong>
            </li>
            <li className="list-group-item border border-2 border-dark modal-text">
              If the registrar is not around/available and only had an
              authorized person to sign the said documents; the name and
              designation of the signee is must.
            </li>
          </ol>
          <p className="modal-text mt-3 fw-bold text-uppercase">
            BRING YOUR PHYSICAL SCHOOL ID or VALID ID DURING PAY-OUT
          </p>
          <p className="modal-text fw-bold">
            If a student is unable to claim their assistance on the scheduled
            date due to personal reasons, they may do so on a later available
            schedule. However, they cannot claim their assistance before the
            originally assigned schedule. <br />
            <br />
            We also regret to inform you that,{" "}
            <strong className="text-danger text-capitalize">
              due to the new format of the DSWD master list{" "}
            </strong>
            , students who are unable to personally claim their assistance
            during any of the designated offsite payout schedules
            <strong className="text-danger text-capitalize">
              {" "}
              will not be allowed{" "}
            </strong>
            to authorize a representative until further notice. This will result
            in a re-validation and cross-matching process for guardians who wish
            to act as authorized claimants.
          </p>
          <p className="modal-text fw-bold text-success">
            For everyone's health and safety, we strongly discourage students
            from camping at the venue, staying overnight, or queuing earlier
            than 6:00 AM.
          </p>
          <p className="modal-text fw-bold text-success">
            You may see the OFFICIAL LIST OF NAMES for your schedule at 2nd
            floor, Office of the House of Representatives (Office of
            Congresswoman Rosemarie "Ate Rose" Panotes), Provincial Capitol
            Building, Daet, Camarines Norte.
          </p>
          <p className="modal-text">
            Please, provide the correct and necessary requirements that we ask
            you to bring on the schedule of your pay-out. Also please bring your
            own snack, drinks and ballpen during pay-out.
          </p>
          <p className="modal-text text-center text-uppercase fw-bold">
            Thank you and Congratulations.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="mx-auto d-block"
            onClick={handleModalClose}
            disabled={!isCloseEnabled}
          >
            {isCloseEnabled ? "I Understand" : `Please Read... ${countdown}s`}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PopCard;
