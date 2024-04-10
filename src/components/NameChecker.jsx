import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Data_Table from "./Data_Table";
import DataModal from "./DataModal";
import "../styles/Check.css";
import { motion } from "framer-motion";
import FloatingButton from "./FloatingButton";
import Loading from "./Loading";

const NameChecker = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      // Prevent the default right-click menu
      event.preventDefault();
    };

    // Add event listener when component mounts
    window.addEventListener('contextmenu', handleContextMenu);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
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
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <DataModal />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="title-page mt-5">Name Checker</div>
            <p className="sub-page lh-base">
              The Name Checker is a simple yet powerful tool designed to verify
              your name and payout schedule. With this tool, users can input
              their personal information, primarily their name, and the
              corresponding payout schedule they expect. The tool then
              cross-references this information against predetermined criteria
              to ensure accuracy and validity. By leveraging advanced algorithms
              and validation techniques, the Name Checker helps users avoid
              errors and discrepancies in their payout schedules. It provides
              instant feedback, indicating whether the entered name matches the
              payout schedule or if any adjustments are needed.
            </p>
          </motion.div>
          <FloatingButton />
          <Data_Table />
        </Container>
      )}
    </div>
  );
};

export default NameChecker;
