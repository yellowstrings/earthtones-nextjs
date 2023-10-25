"use client"

import React, { useRef } from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"


const Header = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section !== "contact") {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: section.offsetTop,
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
      <button
      type="button"
      className="clickable-buttons margin-horizontal"
      onClick={() => {alert('clicked')}}
      >
        tech
      </button>
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