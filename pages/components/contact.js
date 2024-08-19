"use client"

import React from "react";
import { TextField } from "@mui/material";

const Contact = () => {

  return (
    <section id="contact" >
    <div id="contact" className="contact" >
      <div className="form-align">
        <text className="contact-text"> Let's Get Creative! </text>
        <div className="contact-text-small">
          <p className="spacer">
              Booking, commissions, and general inquiries:
          </p>
          <a href="mailto:anisahmajeed4@gmail.com"
              style={{ textDecoration: 'underline' }}
          >
              anisahmajeed4@gmail.com
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;