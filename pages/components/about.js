"use client"

import React from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"

const About = () => {

  //TODO: edit bio
  //TODO: look for different fonts
  return (
    <div className="grid about-container">
    <div class="oval">
    <div className="about">
      <text >
        a b o u t
      </text>
    </div>
      </div>
      <div className="marginHorizontal bioText">
      <text >
      earth tones' compositions are a reflection of their personal experiences and turbulent emotions. haunting strings, raw vocals, and intimacy are the trademark sounds of an earth tones record.
      </text>
    </div>
    </div>
  )
}

export default About;