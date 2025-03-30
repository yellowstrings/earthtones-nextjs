"use client"

import React, { useRef, button } from "react";


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
    <div className='header-container'>
      <button
      type="button"
      className="clickable-buttons"
      onClick={() => scrollToSection('about')}
      >
        <text className='header-font'>
          about
        </text>
      </button>
      <button
        type="button"
        className="clickable-buttons"
        onClick={() => window.open(githubUrl, "_blank", "noopener,noreferrer")}
      >
        <text className='header-font'>
          tech
        </text>
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
      className="clickable-buttons"
      onClick={() => scrollToSection('music')}
      >
        <text className='header-font'>
          music
        </text>
      </button>
      <button
      type="button"
      className="clickable-buttons"
      onClick={() => scrollToSection('contact')}
      >
        <text className='header-font'>
          contact
        </text>
      </button>
    </div>
  )
}

export default Header;