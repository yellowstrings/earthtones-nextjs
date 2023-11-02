"use client"

import React, { useRef } from "react";

import Freeform from "../../public/FreeformSquare2.svg"

const Contact = () => {
  const form = useRef();

  const name = useRef(null)
  const email = useRef(null)
  const message = useRef(null)

  const handleValidation = () => {
    let isValid = true;

    if (name.current.length <= 0) {
      isValid = false;
    }

    if (email.current.length <= 0) {
      isValid = false;
    }

    return isValid;
  };

  const consoleThis = () => {
    console.log('name', name.current)
    console.log('email', email.current)
    console.log('message', message.current)
  }

  // forward email to EmailJS service
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    console.log('this is the process.env.STATIC_FORM: ', process.env.NEXT_PUBLIC_STATIC_FORM)

    try {
      if (isValidForm) {
        const res = await fetch("https://api.staticforms.xyz/submit", {
          method: "POST",
          body: JSON.stringify({
            name: name.current,
            email: email.current,
            message: message.current,
            honeypot: "", // if any value received in this field, form submission will be ignored.
            replyTo: "@", // this will set replyTo of email to email address entered in the form
            accessKey: process.env.NEXT_PUBLIC_STATIC_FORM // get your access key from https://www.staticforms.xyz
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const json = await res.json();

        // if success
          // tell the user there was a success
        // else if error
          // tell the user there's an error

        name.current = null
        email.current = null
        message.current = null
      }
    } catch (err) {
      console.log("this is the err in handleSubmit: ", err);
    }
  };

  return (
    <section id="contact" className="freeform-square">
    <div id="contact" className="contact-form">
      <div className="form-inputs">
        <text className="contact-text"> Let's Get Creative! </text>
        <input
          placeholder="name..."
          type="text"
          name="name"
          className="margin-horizontal margin-vertical text-box-height"
          onChange={(e) => {
            name.current = e.target.value
          }}
        />
        <input
          placeholder="email..."
          name="email"
          className="margin-horizontal margin-vertical text-box-height"
          onChange={(e) => {
            email.current = e.target.value
          }}
          />
        <textarea
          placeholder="message..."
          name="message"
          className="margin-horizontal margin-vertical message-box"
          onChange={(e) => {
            message.current = e.target.value
          }}
          />
        <button className="clickable-buttons send-button form-inputs" onClick={handleSubmit}> Send</button>
      </div>
    </div>
    </section>
  );
};

export default Contact;