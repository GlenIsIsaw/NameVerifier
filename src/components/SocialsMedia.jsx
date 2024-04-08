import React from "react";
import { FacebookProvider, Page } from "react-facebook";
import "../styles/Social.css";

const SocialsMedia = () => {
  return (
    <div className="Social">
    <FacebookProvider appId="953559949445769" className="text-center">
      <Page href="https://www.facebook.com/Congwrosemarie" tabs="timeline" data-lazy="true" />
    </FacebookProvider>
    </div>
  );
};

export default SocialsMedia;
