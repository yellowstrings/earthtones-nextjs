"use client"

import React from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"

const Tour = () => {

  //TODO: edit bio
  //TODO: look for different fonts
  return (
    <div className="grid about-container">
    <div class="oval">
    <div className="about">
      <text >
        t o u r
      </text>
    </div>
      </div>
      < div >
      <li className="marginHorizontal tourDates">
      nov 1: barley and vine
      </li>
      <li className="marginHorizontal tourDates">
      nov 4-5: makerfaire orlando
      </li>
      <li className="marginHorizontal tourDates">
      nov 16: uncle lou's
      </li>
      </div>
    </div>
  )
}

export default Tour;