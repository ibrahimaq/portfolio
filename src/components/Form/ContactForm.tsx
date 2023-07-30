import Button from "../Buttons/Button";
import Container from "../Container";
import React, {
	useEffect,
	useRef,
	useState,
} from "react";
import Textfield from "./Textfield";
import TextArea from "./TextArea";
import { validator } from "../../tools/tools";
import emailjs from "@emailjs/browser"
import ThankYou from "./ThankYou";
import { useGlobalContext } from "../../context/GlobalContext";
import TryAgain from "./TryAgain";



export type FormValuesType = {
	name: string;
	email: string;
	message: string;
};
type FormError = {
	name?: string;
	email?: string;
	message?: string;
}


const ContactForm = () => {
	const {setFormIsSubmitted, formIsSubmitted} = useGlobalContext()
	const [formValues, setFormValues] = useState<FormValuesType>({
		name: '',
		email: '',
		message: '',
	})
	const [formError, setFormError] = useState<FormError>({
		name: '',
		email: '',
		message: ''
	})
	const [loading, setLoading] = useState<boolean>(false)

	const form = useRef<HTMLFormElement>(null)

	const onChange = (value: string, fieldId: string) => {
		setFormValues({ ...formValues, [fieldId]: value })
	}



	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		console.log('formValues: ', formValues)
		await validateForm()

	}

	useEffect(() => {
		let errorArr: string[] = [];
		for (const [key, value] of Object.entries(formError)) {
			if (value) {
				errorArr.push(value)
			}
		}
		if (errorArr.length === 0 && loading) {
			sendMail()
		} else {
			// submitForm()
			setLoading(false)
		}

	}, [formError])

	const validateForm = async () => {

		for (const [key, value] of Object.entries(formValues)) {
			const result = validator(key as keyof FormValuesType, value)

			if (result) {
				console.log('error: ', `${key}: ${result.message}`)
				setFormError((prevFormError) => ({
					...prevFormError, [key]: result.valid ? '' : result.message,
				}))
			}
		}

	}

	const sendMail = () => {
		if (form.current)
		emailjs
			.sendForm(
				`${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
				`${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
				form.current,
				`${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`
			)
			.then(res => {
				console.log("SUCCESS! ", res.status, res.text)
				setLoading(false);
				setFormIsSubmitted(true)
			})

			.catch(err => {
				console.log("FAILED ", err)
				setLoading(false)
				setFormIsSubmitted(false)
		
			})
	}



	return (

		<>
			<Container className="flex flex-col md:flex-row md:justify-between overflow-auto pt-7 pb-16 md:pb-[70px] md:pt-[40px]">


				<>
					<div className="w-full max-w-[600px] pt-0 pb-8 md:pb-0 md:pr-14">
						{formText &&
							<>
								<h2 className="mb-8 text-5xl">{formText.title}</h2>
								<p className="p-subtitle">{formText.text}</p>
							</>
						}
					</div>

					{formIsSubmitted && 
					<div className="w-full md:max-w-[600px]">
						<ThankYou />
					</div>
					}
					{formIsSubmitted === false &&
					<div className="w-full md:max-w-[600px]">
						<TryAgain />
					</div>
					}
			
							<form
							className={`w-full md:max-w-[600px] flex flex-col contact-form
							${formIsSubmitted !== null && 'hidden'}
							`}
							onSubmit={e => handleSubmit(e)}
							noValidate
							ref={form}
							autoComplete="off"
						>
							<Textfield id="name" label="Name" type='name' onValueUpdate={onChange} initialError={formError.name} />
							<Textfield id="email" label="Email" type='email' onValueUpdate={onChange} initialError={formError.email} />
							<TextArea id="message" label="Message" onValueUpdate={onChange} initialError={formError.message} />
	
							<Button label="Send Message" large className="mt-5" loading={loading} type="submit" />
						</form>
					
				</>
				
			</Container>
		</>

	);
};

export default ContactForm;



interface ErrorType {
	errorMessage: string;
}

export const formText = {
	title: "Let's Work Together",
	text: "Have a question, a project idea, or just want to say hello? I'd love to hear from you! Get in touch using the form below and I'll get back to you as soon as possible."
}
