import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const Faq = () => {
  return (
    <Container className="mt-5">
      <div className="title-page">Frequently Asked Questions</div>
      <Accordion
        defaultActiveKey="0"
        flush
        className="mt-3 border border-3 border-success rounded-1 shadow-lg"
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-title">
            What is Name Verifier Web Application?
          </Accordion.Header>
          <Accordion.Body className="text-center">
            The Name Verifier web application for Educational Assistance is a
            simple but a powerful tool designed to streamline the verification
            process for individuals seeking educational aid. Developed with
            efficiency and accuracy in mind, this innovative platform simplifies
            the task of confirming applicants' identities for various assistance
            programs. By leveraging advanced technology and robust security
            measures, the Name Verifier ensures swift and reliable verification,
            enabling expedited disbursement of educational support to deserving
            students. With its user-friendly interface and commitment to
            accessibility, this application represents a significant advancement
            in facilitating equitable access to education for all.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accordion-title">
            What is the purpose of Name Verifier Web Application?
          </Accordion.Header>
          <Accordion.Body className="text-center">
            The Name Verifier Web Application of Padagos Lang serves as a
            digital platform designed to authenticate and verify individuals'
            names for various official purposes. Whether it's for constituent
            services, identity verification, or other administrative needs, this
            application streamlines the process of confirming individuals'
            identities accurately and efficiently. It likely offers a secure and
            convenient means for constituents to ensure that their information
            is correctly recorded and utilized for appropriate governmental
            procedures.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="accordion-title">
            How to use the Name Verifier Web Application?
          </Accordion.Header>
          <Accordion.Body>
            <Table bordered hover>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center fw-bold">1.</td>
                  <td>Access the website using this link.</td>
                </tr>
                <tr>
                  <td className="text-center fw-bold">2.</td>
                  <td>
                    Select the{" "}
                    <span className="text-uppercase fw-bold text-success">
                      Check Application
                    </span>{" "}
                    button at the top of the website
                  </td>
                </tr>
                <tr>
                  <td className="text-center fw-bold">3.</td>
                  <td>
                    Fill-out the e-form at the page and wait for the result.
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="accordion-title">
            I want to ask a question personally regarding the Educational
            Assistance Program, what office should I go?
          </Accordion.Header>
          <Accordion.Body className="">
            For inquiries about qualification, cross-matching & guidelines about
            the Educational Assistance. Please come & visit :
            <br />
            <p className="ms-3 mt-3">
              {" "}
              <span className="fw-bold text-success">
                • Department of Social and Welfare Development Office{" "}
              </span>
              <span className="fw-normal">
                - Camarines Norte Provincial Office
              </span>
              <br />
              <FontAwesomeIcon icon={faBuilding} className="ms-2" /> Barangay 3
              Justo Lukban St, Daet, 4600 Camarines Norte
            </p>
            For inquiries about the Application. Please come & visit :
            <p className="ms-3 mt-3">
              {" "}
              <span className="fw-bold text-success">
                • 2nd Legislative District House of Representative{" "}
              </span>
              <span className="fw-normal">- Camarines Norte</span>
              <br />
              <FontAwesomeIcon icon={faBuilding} className="ms-2" /> 2nd Floor,
              Provincial Capitol Grounds, Daet, 4600 Camarines Norte
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="accordion-title">
            I was unable to attend to the schedule of my pay-out, What should I
            do?
          </Accordion.Header>
          <Accordion.Body className="text-center">
            If you're unable to claim your assistance/cash grant on the schedule
            that has been given, you may still able to claim the grant on the
            other available schedule. Unfortunately, if you're still unable to
            claim your grant, you have to wait for the next schedule of
            educational assistance pay-out, however, you may ask{" "}
            <strong>DSWD Camarines Norte Provincial Office</strong> regarding to
            that matter.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
