import React from "react";
import { Container } from "react-bootstrap";
import Data_Table from "./Data_Table";
import '../styles/Check.css';

const Check = () => {
  return (
    <Container>
      <div className="title-page mt-5">Name Checker</div>
      <p className="sub-page lh-base">
        The Name Checker is a simple yet powerful tool designed to verify your
        name and payout schedule. With this tool, users can input their personal
        information, primarily their name, and the corresponding payout schedule
        they expect. The tool then cross-references this information against
        predetermined criteria to ensure accuracy and validity. By leveraging
        advanced algorithms and validation techniques, the Name Checker helps
        users avoid errors and discrepancies in their payout schedules. It
        provides instant feedback, indicating whether the entered name matches
        the payout schedule or if any adjustments are needed.
      </p>
      <Data_Table />
    </Container>
  );
};

export default Check;
