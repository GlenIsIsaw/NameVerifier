import React from "react";
import { FacebookProvider, Page } from "react-facebook";

const SocialsMedia = () => {
  return (
    <FacebookProvider appId="953559949445769" className="text-center">
      <Page href="https://www.facebook.com/Congwrosemarie" tabs="timeline"/>
    </FacebookProvider>
  );
};

export default SocialsMedia;
