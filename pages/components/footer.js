"use client"

import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

 import InstagramButton from "./social/InstagramButton.js";
 import TikTokButton from "./social/TikTokButton.js";
 import GithubButton from "./social/GithubButton.js";

import "../../src/app/globals.css"

// import { colorTheme } from '../utils/theme'

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