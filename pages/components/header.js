"use client"

import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';

import "../../src/app/globals.css"

// import { colorTheme } from '../utils/theme'

const Header = () => {

  return (
    <div className="headerContainer">
      <button
      type="button"
      className="headerButtons marginHorizontal"
      onClick={() => {alert('clicked')}}
      >
        about
      </button>
      <button
      type="button"
      className="headerButtons marginHorizontal"
      onClick={() => {alert('clicked')}}
      >
        tech
      </button>
      <button
      type="button"
      className="logo"
      onClick={() => {alert('clicked')}}
      >
        earth tones
      </button>
      <button
      type="button"
      className="headerButtons marginHorizontal"
      onClick={() => {alert('clicked')}}
      >
        tour
      </button>
      <button
      type="button"
      className="headerButtons marginHorizontal"
      onClick={() => {alert('clicked')}}
      >
        contact
      </button>
    </div>
  )
}

export default Header;