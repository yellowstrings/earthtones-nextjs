"use client"

import React from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"

const Tour = () => {

  //TODO: edit bio
  //TODO: look for different fonts
  return (
    <div className="grid about-container">
    <div className="oval">
    <div className="bubble-text">
      <text >
        t o u r
      </text>
    </div>
    </div>
      <ul >
      <li className="marginHorizontal tourDates">
      nov 1: barley and vine
      </li>
      <li className="marginHorizontal tourDates">
      nov 4-5: makerfaire orlando
      </li>
      <li className="marginHorizontal tourDates">
      nov 16: uncle lou's
      </li>
      </ul>
    </div>
  )
}

export default Tour;