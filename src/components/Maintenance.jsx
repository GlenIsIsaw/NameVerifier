import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faFileLines } from "@fortawesome/free-solid-svg-icons";

const Maintenance = () => {
  return (
    <div>
      <div className="fs-1 text-center mt-5">
        <FontAwesomeIcon icon={faFileLines} size="4x"/>
      </div>
      <div className="fs-1 fw-bold text-uppercase text-center mt-5">
        Application Forms are available now!
      </div>
      <p className="text-center fs-6 mt-2 mx-3">
        For more details about the financial assistance; please visit our
        office at <span className="text-success"> 2nd Legeslative Office, 2nd Floor, Provincial Capitol, Daet,
        Camarines Norte 4600 </span>
      </p>
    </div>
  );
};

export default Maintenance;
