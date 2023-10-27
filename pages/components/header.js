"use client"

import React, { useRef } from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"


const Header = () => {


  const githubUrl = "https://github.com/yellowstrings/earthtones-nextjs#readme";


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section !== "contact") {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: section.offsetTop - 150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="header-container">
      <button
      type="button"
      className="clickable-buttons margin-right"
      onClick={() => scrollToSection('about')}
      >
        about
      </button>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="clickable-buttons margin-horizontal">
        <button
        type="button"
        >
          tech
        </button>
      </a>
      <button
      type="button"
      className="logo"
      >
        <text className="logo-text">
          earth tones
        </text>
      </button>
      <button
      type="button"
      className="clickable-buttons margin-horizontal"
      onClick={() => scrollToSection('tour')}
      >
        tour
      </button>
      <button
      type="button"
      className="clickable-buttons margin-left"
      onClick={() => scrollToSection('contact')}
      >
        contact
      </button>
    </div>
  )
}

export default Header;