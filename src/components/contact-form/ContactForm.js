import React from "react";
import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

import * as styles from "./styles.module.scss";
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  })
  const [formValidation, setFormValidation] = useState({
    errors: {
      name: '',
      email: '',
      message: '',
    },
    isSubmit: false,
  })
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValidation({...formValidation, errors: validateForm(formData), isSubmit: true});
}

useEffect(() => {
  if(Object.keys(formValidation.errors).length === 0 && formValidation.isSubmit === true){
      submitForm();
  }
  else{
      console.log("invalid form")
      console.log(formValidation);
      setFormValidation({...formValidation, isSubmit: false})
  }
  
})

const submitForm = () => {
  emailjs.sendForm(`${process.env.GATSBY_EMAILJS_SERVICE_ID}`, `${process.env.GATSBY_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.GATSBY_EMAILJS_USER_ID}`)
      .then(res => {
          console.log('SUCCESS! ', res.status, res.text)
          // setShowAlert(false);
          // navigate("/form-submitted")
      })

      .catch(err => {
          console.log("FAILED ", err);
          // setShowAlert(true);
          setFormValidation({...formValidation, isSubmit: false})
      })
}
  
  const validateForm = (formData) => {
    const errors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!formData.name){
      errors.name = "Name is required!";
    } else if(formData.name.length > 50){
        errors.name = "Name cannot exceed 50 characters!"
    }
    if(!form.email){
        errors.email = "Email is required!"
    } else if(formData.email.length > 100){
        errors.email = "Email cannot exceed 100 characters!"
    } else if(!emailRegex.test(formData.email)){
        errors.email = "Email format is not valid!"
    }
    if(!formData.message){
        errors.message = "Message is required!"
    } else if(formData.message.length < 10 || formData.message.length > 1000) {
        errors.message = "Message needs to be between 10 and 1000 characters long!"
    }

    return errors;
  }


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("ok");
  //   let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if(email.match(mailformat)){
  //     emailjs.sendForm(`${process.env.GATSBY_EMAILJS_SERVICE_ID}`, `${process.env.GATSBY_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.GATSBY_EMAILJS_USER_ID}`)
  //     .then(res => console.log('SUCCESS!', res.status, res.text))
  //     .catch(err => {
  //     console.log("FAILED", err);
  //     alert("Sorry an error occurred when sending your message. Try again or reach out to me via Twitter or LinkedIn.")
  //   });
  //   form.current.reset();
  //   } else{
  //     alert("Please enter a valid email address.")
  //   }
 
  // }

    return ( 

        <form ref={form} onSubmit={(e)=>handleSubmit(e)} onChange={(e) => handleChange(e)} className={styles.form}>
          <label htmlFor="formName">Name</label>
          <input id="formName" type="text" required placeholder="Name" name="name" />
          <label htmlFor="formEmail">Email</label>
          <input id="formEmail" type="email" required placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="formMessage">Message</label>
          <textarea id="formMessage" cols="10" rows="5" required placeholder="Enter message" name="message" />
          <button type="submit" value="Send" onClick={(e)=> {
            handleSubmit(e)
        }}>Send message</button>
        </form>

     );
}
 
export default ContactForm;