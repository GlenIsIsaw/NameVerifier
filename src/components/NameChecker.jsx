import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap"; // Added Button import
import Group_Buttons from "./schedule-buttons/Group_Buttons";
import DataModal from "./DataModal";
import "../styles/Check.css";
import { motion } from "framer-motion";
import Loading from "./Loading";
import Maintenance from "./Maintenance";

// Security validation function for external URLs
const validateExternalUrl = (url) => {
  if (!url) return false;
  
  // Only allow HTTPS for maximum security (no HTTP)
  const allowedProtocols = ['https:'];
  const blockedPatterns = [
    /javascript:/i,
    /data:/i,
    /vbscript:/i,
    /file:/i,
    /about:/i,
    /chrome:/i
  ];
  
  try {
    const urlObj = new URL(url);
    
    // Only allow HTTPS protocol (more secure)
    if (!allowedProtocols.includes(urlObj.protocol)) {
      console.error('Security: Only HTTPS is allowed', urlObj.protocol);
      return false;
    }
    
    // Block known malicious patterns
    for (const pattern of blockedPatterns) {
      if (pattern.test(url)) {
        console.error('Security: Blocked malicious URL pattern');
        return false;
      }
    }
    
    return true;
  } catch {
    console.error('Security: Invalid URL format');
    return false;
  }
};

// Safe External Button Component
const SafeExternalButton = ({ children, href, variant, className, size, block, ...props }) => {
  const [isValid, setIsValid] = useState(true);
  
  const handleClick = (e) => {
    if (!validateExternalUrl(href)) {
      e.preventDefault();
      setIsValid(false);
      alert('This link cannot be opened for security reasons. Please contact support.');
      return false;
    }
    return true;
  };
  
  if (!isValid) {
    return (
      <Button
        variant="secondary"
        className={className}
        disabled
        block={block}
        {...props}
      >
        Link Unavailable
      </Button>
    );
  }
  
  return (
    <Button
      variant={variant}
      className={className}
      size={size}
      block={block}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      role="button"
      {...props}
    >
      {children}
    </Button>
  );
};

const NameChecker = () => {
  
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

  // Replace with your actual external website URL
  const EXTERNAL_WEBSITE_URL = "https://educational-assistance-2d.vercel.app";

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
            <div className="title-page mt-2">Name Checker</div>
            <p className="sub-page">
              The Schedule Checker is a simple yet powerful tool designed to verify
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
            <p className="blinking-text fw-bold text-uppercase text-center">
              To avoid text-scams and fake SMS regarding the Educational Assistance Program, Please check your schedule here.
            </p>
            
            {/* Sub-title and Large Responsive Button */}
            <div className="text-center mb-5">
              <p className="sub-title mb-4">
                Educational Assistance 2026 Batch 1.0 - List of Schedules
              </p>
              
              {/* Large Responsive Button */}
              <div className="d-flex justify-content-center">
                <SafeExternalButton
                  variant="success"
                  className="text-uppercase fw-bold external-button"
                  size="lg"
                  href={EXTERNAL_WEBSITE_URL}
                >
                  View Official Website
                </SafeExternalButton>
              </div>
            </div>
            
          </motion.div>      
          
          <Group_Buttons/>
              {/* <Data_Table />  */}
        </Container>
      )}
    </div>
  );
};

export default NameChecker;