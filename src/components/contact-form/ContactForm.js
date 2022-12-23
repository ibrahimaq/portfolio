import React from "react"
import { useRef, useState, useEffect } from "react"
import { navigate } from "gatsby"
import emailjs from "@emailjs/browser"

const ContactForm = ({customClass}) => {
  // const [submitSuccess, setSubmitSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  })
  const [formValidation, setFormValidation] = useState({
    errors: {
      name: "",
      email: "",
      message: "",
    },
    isSubmit: false,
  })
  const form = useRef()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFormValidation({
      ...formValidation,
      errors: validateForm(formData),
      isSubmit: true,
    })
  }

  useEffect(() => {
    if (
      Object.keys(formValidation.errors).length === 0 &&
      formValidation.isSubmit === true
    ) {
      submitForm()
    } else {
      // console.log("invalid form")
      // console.log(formData)
      // console.log(formValidation);
      setFormValidation({ ...formValidation, isSubmit: false })
    }
  }, [formValidation.isSubmit])

  const submitForm = () => {
    emailjs
      .sendForm(
        `${process.env.GATSBY_EMAILJS_SERVICE_ID}`,
        `${process.env.GATSBY_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.GATSBY_EMAILJS_USER_ID}`
      )
      .then(res => {
        console.log("SUCCESS! ", res.status, res.text)
        // setSubmitSuccess(true);
        // setShowAlert(false);
        navigate("/thank-you")
      })

      .catch(err => {
        console.log("FAILED ", err)
        // setShowAlert(true);
        setFormValidation({ ...formValidation, isSubmit: false })
      })
  }

  const validateForm = formData => {
    const errors = {}
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!formData.name) {
      errors.name = "Name is required"
    } else if (formData.name.length > 50) {
      errors.name = "Name cannot exceed 50 characters"
    }
    if (!formData.email) {
      errors.email = "Email is required"
    } else if (formData.email.length > 100) {
      errors.email = "Email cannot exceed 100 characters"
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email format is not valid"
    }
    if (!formData.message) {
      errors.message = "Message is required"
    } else if (formData.message.length < 10 || formData.message.length > 1000) {
      errors.message =
        "Message needs to be between 10 and 1000 characters long"
    }

    return errors
  }

  const inputClassName = 'w-full bg-inherit text-font-greydark p-3 border-b border-b-gray-400 focus:border-b-gray-600  border-l border-l-gray-400 focus:border-l-gray-600 focus:outline-none';

  const errClassName = 'text-rose-400';

  return (
      <form
      ref={form}
      onSubmit={e => handleSubmit(e)}
      onChange={e => handleChange(e)}
      className={`flex flex-col ${customClass}`}
    >
      <label htmlFor="formName" hidden>
        Name
      </label>
      <input
        type="text"
        id="formName"
        required
        placeholder="Name"
        name="name"
        className={`${inputClassName}`}
      />
      {formValidation.errors.name && <p className={errClassName}>{formValidation.errors.name}</p>}

      <label htmlFor="formEmail" hidden>
        Email
      </label>
      <input
        type="text"
        id="formEmail"
        name="email"
        required
        placeholder="Email"
        className={`mt-5 ${inputClassName}`}
      />
      {formValidation.errors.email && <p className={errClassName}>{formValidation.errors.email}</p>}

      <label htmlFor="formMessage" hidden>Message</label>
      <textarea 
      name="message" 
      id="formMessage"
      cols="10" 
      rows="5"
      required
      placeholder="Hello, how can I help?"
      className={`mt-5 resize-none ${inputClassName}`}
      />
      {formValidation.errors.message && <p className={errClassName}>{formValidation.errors.message}</p>}

      <button
      type="submit"
      value='Send'
      onClick={e => handleSubmit(e)}
      className='px-3 py-3 mt-8 bg-blackBg text-greylightBg cursor-pointer'
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
