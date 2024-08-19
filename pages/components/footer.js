"use client"

import React from "react";

 import InstagramButton from "./social/InstagramButton.js";
 import TikTokButton from "./social/TikTokButton.js";
 import GithubButton from "./social/GithubButton.js";

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