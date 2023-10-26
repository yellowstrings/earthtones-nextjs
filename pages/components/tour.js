"use client"

import React from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"

const Tour = () => {

  //TODO: edit bio
  //TODO: look for different fonts
  return (
    <section id="tour" className="grid about-container">
    <div className="oval">
    <div className="bubble-text">
      <text >
        t o u r
      </text>
    </div>
    </div>
      <ul >
      <li className="margin-horizontal tour-dates">
      Nov 1: Barley and Vine @ 8pm || FREE
      </li>
      <li className="margin-horizontal tour-dates">
      Nov 4-5: Makerfaire Orlando @ 12pm
      </li>
      <li className="margin-horizontal tour-dates">
      Nov 16: Uncle Lou's @ 7pm || $5 entry
      </li>
      </ul>
    </section>
  )
}

export default Tour;