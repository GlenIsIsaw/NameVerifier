import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

// Security utility function for external links
const validateExternalUrl = (url) => {
  if (!url) return false;
  
  // Check if URL is safe
  const safeProtocols = ['https:', 'http:'];
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
    
    // Only allow http and https protocols
    if (!safeProtocols.includes(urlObj.protocol)) {
      console.error('Security: Blocked unsafe protocol', urlObj.protocol);
      return false;
    }
    
    // Block known malicious patterns
    for (const pattern of blockedPatterns) {
      if (pattern.test(url)) {
        console.error('Security: Blocked malicious URL pattern');
        return false;
      }
    }
    
    // Additional check for common phishing patterns
    const suspiciousDomains = ['example-fake.com', 'secure-login.ru']; // Add known malicious domains
    const domain = urlObj.hostname;
    if (suspiciousDomains.some(suspicious => domain.includes(suspicious))) {
      console.error('Security: Blocked suspicious domain');
      return false;
    }
    
    return true;
  } catch {
    // If URL parsing fails, it's likely malformed
    console.error('Security: Invalid URL format');
    return false;
  }
};

// Security utility for internal routes
const validateInternalRoute = (route) => {
  if (!route) return false;
  
  // Block path traversal attempts
  if (route.includes('..') || route.includes('//')) {
    console.error('Security: Blocked path traversal attempt');
    return false;
  }
  
  // Block javascript protocol in routes
  if (route.toLowerCase().startsWith('javascript:')) {
    console.error('Security: Blocked javascript protocol');
    return false;
  }
  
  // Ensure route is safe
  const safeRoutePattern = /^\/[a-zA-Z0-9\-_/]*$/;
  if (!safeRoutePattern.test(route)) {
    console.error('Security: Invalid route format');
    return false;
  }
  
  return true;
};

// Safe click handler for internal navigation
const SafeInternalButton = ({ children, to, variant, className, ...props }) => {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    
    if (validateInternalRoute(to)) {
      navigate(to);
    } else {
      console.error('Security: Blocked navigation to', to);
      // Optional: Show user-friendly error message
      // You can add a toast notification here
    }
  };
  
  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleClick}
      role="button"
      {...props}
    >
      {children}
    </Button>
  );
};

// Safe click handler for external links
const SafeExternalButton = ({ children, href, variant, className, ...props }) => {
  const handleClick = (e) => {
    if (!validateExternalUrl(href)) {
      e.preventDefault();
      console.error('Security: Blocked unsafe external link');
      // Optional: Show user-friendly error message
      return;
    }
    // If URL is safe, allow normal navigation with security attributes
  };
  
  return (
    <Button
      variant={variant}
      className={className}
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

const Announcement = () => {
  return (
    <Container>
      <div className="border border-2 border-success rounded-3">
        <Card>
          <Card.Body>
            <Card.Title className="text-uppercase fw-bold">
              Educational Assistance 2026 Result
            </Card.Title>
            <Card.Text>
              See full list here.
            </Card.Text>
            <SafeExternalButton
              variant="success"
              className="text-uppercase fw-bold"
              href="https://educational-assistance-2d.vercel.app"
            >
              See more
            </SafeExternalButton>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-3 border border-2 border-success rounded-3">
        <Card>
          <Card.Body>
            <Card.Title className="text-uppercase fw-bold">
              bantayong festival 2026
            </Card.Title>
            <Card.Text>
              𝐂𝐀𝐌𝐀𝐑𝐈𝐍𝐄𝐒 𝐍𝐎𝐑𝐓𝐄 𝐁𝐀𝐍𝐓𝐀𝐘𝐎𝐆 𝐅𝐄𝐒𝐓𝐈𝐕𝐀𝐋 𝟐𝟎𝟐𝟔 𝐀𝐂𝐓𝐈𝐕𝐈𝐓𝐈𝐄𝐒 𝐂𝐀𝐍𝐂𝐄𝐋𝐋𝐄𝐃
            </Card.Text>
            <SafeExternalButton
              variant="success"
              className="text-uppercase fw-bold"
              href="https://www.facebook.com/photo/?fbid=122309852474221018&set=pcb.122309852570221018"
            >
              See more
            </SafeExternalButton>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-3 border border-2 border-success rounded-3">
        <Card>
          <Card.Body>
            <Card.Title className="text-uppercase fw-bold">
              RSCUAA 2026
            </Card.Title>
            <Card.Text>
              Buo po ang ating suporta sa ating mga atleta mula sa Camarines
              Norte State College para sa kanilang pagsabak sa regional
              competition bitbit ang dangal at talento ng mga CamNorteño. <br /> <br />
              Padagos lang! 💪🏻 <br /> <br /> #PadagosLang <br />
              #siROSEMARIEangPANOTESko
            </Card.Text>
            <SafeExternalButton
              variant="success"
              className="text-uppercase fw-bold"
              href="https://www.facebook.com/Congwrosemarie/posts/pfbid02K64Kst45s7dBsk8mMKNa8kj3oxcEYuAym8yjBLic86Nj4siEnSs1v8dzXU4BVSZl"
            >
              See more
            </SafeExternalButton>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Announcement;