import React from "react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import * as styles from "./styles.module.scss";
const ContactForm = ({addTask}) => {
  const [taskInp, setTaskInp] = useState("")
  const form = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    // emailjs.sendForm(`${process.env.EMAILJS_SERVICE_ID}`, `${process.env.EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.EMAILJS_USER_ID}`)
    // .then(res => console.log('SUCCESS!', res.status, res.text))
    // .catch(err => {
    //   console.log("FAILED", err);
    //   alert("Sorry an error occurred when sending your message. Try again or contact me via LinkedIn.")
    // });
   
 
  }

    return ( 

        <form ref={form} onSubmit={(e)=>handleSubmit(e)} className={styles.form}>
          <label htmlFor="formName">Name</label>
          <input id="formName" type="text" required placeholder="Name" name="user_name" value={taskInp}
            onChange={e=>
                setTaskInp(e.target.value)} />
          <label htmlFor="formEmail">Email</label>
          <input id="formEmail" type="email" required placeholder="Email" name="user_email" value={taskInp}
            onChange={e=>
                setTaskInp(e.target.value)}  />
          <label htmlFor="formMessage">Message</label>
          <textarea id="formMessage" cols="30" rows="10" required placeholder="Enter message" name="message" value={taskInp}
            onChange={e=>
                setTaskInp(e.target.value)}   />
          <button type="submit" value="Send" onClick={()=> {
            addTask(taskInp)
            setTaskInp("")
        }}>Send message</button>
        </form>

     );
}
 
export default ContactForm;