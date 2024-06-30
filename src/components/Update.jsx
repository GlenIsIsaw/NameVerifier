import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Data_Update from "./Data_Update";
import DataModal from "./DataModal";
import "../styles/Check.css";
import { motion } from "framer-motion";
import FloatingButton from "./FloatingButton";
import Loading from "./Loading";
import Maintenance from "./Maintenance";
import { Link } from "react-router-dom";

const Update = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  useEffect(() => {
    const isMaintenance = false;
    setMaintenanceMode(isMaintenance);
  }, []);

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {maintenanceMode ? (
        <Maintenance />
      ) : loading ? (
        <Loading />
      ) : (
        <Container>
          <DataModal />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="title-page mt-5">ONE LAST CALL</div>
            <p className="text-center fs-6">
              This is the last call for those student beneficiaries that wasn't
              able to claim the educational cash assistance last{" "}
              <strong>April 15 - 26, 2024</strong> <br /> if you already claimed
              your educational assistance, please disregard the list or if you do
              not see your name; please click the original link <Link to="/NameChecker" className="text-decoration-underline">here</Link> or <Link to="/NameChecker" className="text-decoration-underline">educational assistance webpage</Link> 
            </p>
            <p className="blinking-text fw-bold text-uppercase text-center">
              To avoid text-scams and fake SMS regarding the Educational
              Assistance Program, Please check your name here.
            </p>
            <p className="sub-title">
              Educational Assistance 2024 - List of Qualified Students
            </p>
          </motion.div>
          <FloatingButton />
          <Data_Update />
        </Container>
      )}
    </div>
  );
};

export default Update;
