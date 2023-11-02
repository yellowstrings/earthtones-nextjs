"use client"

import React from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"

const About = () => {

  //TODO: edit bio
  //TODO: look for different fonts
  return (
    <section id="about">
      <div className="grid about-container freeform-oval-about">
        <div className="bubble-text">
          <text >
            a b o u t
          </text>
        </div>
        <div className="margin-horizontal bio-text">
          <text >
          earth tones' compositions are a reflection of their personal experiences and turbulent emotions. haunting strings, raw vocals, and intimacy are the trademark sounds of an earth tones record.
          </text>
        </div>
    </div>
  </section>
  )
}

export default About;