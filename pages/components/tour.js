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
      Nov 4-5: Makerfaire Orlando @ 12pm
      </li>
      <li className="margin-horizontal tour-dates">
      Nov 16: Uncle Lou's @ 7pm || $5 entry
      </li>
      </ul>
    </div>
    </section>
  )
}

export default Tour;