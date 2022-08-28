import React from "react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import * as styles from "./styles.module.scss";
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const form = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
      emailjs.sendForm(`${process.env.GATSBY_EMAILJS_SERVICE_ID}`, `${process.env.GATSBY_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.GATSBY_EMAILJS_USER_ID}`)
      .then(res => console.log('SUCCESS!', res.status, res.text))
      .catch(err => {
      console.log("FAILED", err);
      alert("Sorry an error occurred when sending your message. Try again or reach out to me via Twitter or LinkedIn.")
    });
    form.current.reset();
    } else{
      alert("Please enter a valid email address.")
    }
 
  }

    return ( 

        <form ref={form} onSubmit={(e)=>handleSubmit(e)} className={styles.form}>
          <label htmlFor="formName">Name</label>
          <input id="formName" type="text" required placeholder="Name" name="user_name" />
          <label htmlFor="formEmail">Email</label>
          <input id="formEmail" type="email" required placeholder="Email" name="user_email" onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="formMessage">Message</label>
          <textarea id="formMessage" cols="10" rows="5" required placeholder="Enter message" name="message" />
          <button type="submit" value="Send" onClick={(e)=> {
            handleSubmit(e)
        }}>Send message</button>
        </form>

     );
}
 
export default ContactForm;