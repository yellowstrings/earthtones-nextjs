"use client"

import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

import "../../src/app/globals.css"

// import { colorTheme } from '../utils/theme'

const Footer = () => {

  return (
    <div className="footerButtons marginHorizontal">
      <FaInstagram
        size={30}
        color="white"
        onClick={() => {alert('instagram')}}
      />
      <FaTiktok
        size={30}
        color="white"
        onClick={() => {alert('tiktok')}}
      />
      <FaGithub
        size={30}
        color="white"
        onClick={() => {alert('github')}}
      />
    </div>
  )
}

export default Footer;