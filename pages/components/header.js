"use client"

import React, { useRef } from "react";
import { Button } from '@mui/material';


import "../../src/app/globals.css"


const Header = () => {

  return (
    <div className="header-container">
      <button
      type="button"
      className="clickable-buttons margin-right"
      onClick={() => {alert('clicked')}}
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
      onClick={() => {alert('clicked')}}
      >
        <text className="logo-text">
          earth tones
        </text>
      </button>
      <button
      type="button"
      className="clickable-buttons margin-horizontal"
      onClick={() => {alert('clicked')}}
      >
        tour
      </button>
      <button
      type="button"
      className="clickable-buttons margin-left"
      onClick={() => {alert('clicked')}}
      >
        contact
      </button>
    </div>
  )
}

export default Header;