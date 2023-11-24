"use client"

import React from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"

const Tour = () => {

  //TODO: edit bio
  //TODO: look for different fonts
  return (
    <section id="tour" >
    <div className="grid about-container freeform-oval-tour">
    <div className="bubble-text">
      <text >
        t o u r
      </text>
    </div>
      <ul >
      <li className="margin-horizontal tour-dates">
      Dec 7: Stardust Video & Coffee || $5
      </li>
      </ul>
    </div>
    </section>
  )
}

export default Tour;