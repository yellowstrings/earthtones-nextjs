"use client"

import React from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"

const Music = () => {

  //TODO: edit bio
  //TODO: look for different fonts
  return (
    <section id="music" >
    <div className="about-container">
    <div className="label-text">
      <text >
        m u s i c
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

export default Music;