"use client"

import React from "react";

 import InstagramButton from "./social/InstagramButton.jsx";
 import TikTokButton from "./social/TikTokButton.jsx";
 import GithubButton from "./social/GithubButton.jsx";

import "../../src/app/globals.css"

const Footer = () => {

  return (
    <div className="footer-button-container">
      <InstagramButton />
      <TikTokButton />
      <GithubButton />
    </div>
  )
}

export default Footer;