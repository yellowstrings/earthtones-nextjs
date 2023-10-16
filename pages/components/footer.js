"use client"

import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

import "../../src/app/globals.css"

// import { colorTheme } from '../utils/theme'

const Footer = () => {

  return (
    <div className="footerButtonContainer ">
      <FaInstagram
        size={30}
        color="white"
        onClick={() => {alert('instagram')}}
        className="footerButtons"
      />
      <FaTiktok
        size={30}
        color="white"
        onClick={() => {alert('tiktok')}}
        className="footerButtons"
      />
      <FaGithub
        size={30}
        color="white"
        onClick={() => {alert('github')}}
        className="footerButtons"
      />
    </div>
  )
}

export default Footer;