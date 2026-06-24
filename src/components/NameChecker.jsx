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
  const allowedProtocols = ["https:"];
  const blockedPatterns = [
    /javascript:/i,
    /data:/i,
    /vbscript:/i,
    /file:/i,
    /about:/i,
    /chrome:/i,
  ];

  try {
    const urlObj = new URL(url);

    // Only allow HTTPS protocol (more secure)
    if (!allowedProtocols.includes(urlObj.protocol)) {
      console.error("Security: Only HTTPS is allowed", urlObj.protocol);
      return false;
    }

    // Block known malicious patterns
    for (const pattern of blockedPatterns) {
      if (pattern.test(url)) {
        console.error("Security: Blocked malicious URL pattern");
        return false;
      }
    }

    return true;
  } catch {
    console.error("Security: Invalid URL format");
    return false;
  }
};

// Safe External Button Component
const SafeExternalButton = ({
  children,
  href,
  variant,
  className,
  size,
  block,
  ...props
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleClick = (e) => {
    if (!validateExternalUrl(href)) {
      e.preventDefault();
      setIsValid(false);
      alert(
        "This link cannot be opened for security reasons. Please contact support.",
      );
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
            <div className="title-page mt-2">Scholarship and Assistance</div>
            <p className="sub-page">
              This Program, made possible through the
              people’s tax money and in partnership with a national government
              agency, is designed to provide accessible, reliable support to
              those in need. It offers a simple and comfortable way for
              beneficiaries to verify their eligibility and receive assistance,
              ensuring a smooth, transparent, and people-centered experience
              every step of the way.
            </p>
            <p className="blinking-text fw-bold text-uppercase text-center">
              To avoid text-scams and fake SMS regarding the Educational
              Assistance/Scholarship Program, Please check announcement here.
            </p>

            {/* Sub-title and Large Responsive Button */}
            <div className="text-center mb-5">
              <p className="sub-title mb-4">Educational Assistance and Scholarship 2026</p>

              {/* Large Responsive Button */}
              <div className="d-flex justify-content-center">
                <SafeExternalButton
                  variant="success"
                  className="text-uppercase fw-bold external-button"
                  size="lg"
                  disabled
                  href={EXTERNAL_WEBSITE_URL}
                >
                  Educational Assistance 2026 - Not available
                </SafeExternalButton>
              </div>
                 <div className="d-flex justify-content-center mt-3">
                <SafeExternalButton
                  variant="success"
                  className="text-uppercase fw-bold external-button"
                  size="lg"
                  disabled
                  href={EXTERNAL_WEBSITE_URL}
                >
                 Unifast Tulong Dunong Program - Not Available
                </SafeExternalButton>
              </div>
            </div>
          </motion.div>

          <Group_Buttons />
          {/* <Data_Table />  */}
        </Container>
      )}
    </div>
  );
};

export default NameChecker;
