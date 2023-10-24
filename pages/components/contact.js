"use client"

import React, { useRef } from "react";
// import Input from "../Form/Input";
// import Button from "../Form/Button";
// import TextArea from "../Form/TextArea";

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

  // forward email to EmailJS service
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    console.log('this is the process.env.STATIC_FORM: ', process.env.STATIC_FORM)

    // try {
      // if (isValidForm) {
      //   const res = await fetch("https://api.staticforms.xyz/submit", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       name: name.current,
      //       email: email.current,
      //       message: message.current,
      //       honeypot: "", // if any value received in this field, form submission will be ignored.
      //       replyTo: "@", // this will set replyTo of email to email address entered in the form
      //       accessKey: process.env.NEXT_PUBLIC_STATIC_FORM // get your access key from https://www.staticforms.xyz
      //     }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });

    //     const json = await res.json();

    //     if (json.success) {
    //       // Reset form fields
    //       name.current = null
    //       email.current = null
    //       message.current = null
    //     } else {
    //       // Reset form fields
    //       name.current = null
    //       email.current = null
    //       message.current = null
    //     }
    //   }
  //   } catch (err) {
  //     console.log("this is the err in handleSubmit: ", err);
  //   }
  };


  return (
    <div >
      <input type="text" className="marginHorizontal"/>
    </div>
  );
};

export default Contact;