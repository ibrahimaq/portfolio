export const changeToDark = () => {
	document.body.classList.add("dark")
}
export const changeToLight = () => {
	document.body.classList.remove("dark")
}

import { ErrorType } from "../components/form/Textfield"

type StatusType = {
	valid: boolean
	message: string
}
export const validator = (
	type: "name" | "email" | "message",
	value: string
) => {
	const status = {} as StatusType

	switch (type) {
		case "name":
			if (value.length === 0) {
				status.valid = false
				status.message = "Name is required"
				return status
			}
			if (value.length < 2) {
				; (status.valid = false),
					(status.message = "Name must be at least 2 characters long")
				return status
			}
			if (value.length > 145) {
				; (status.valid = false),
					(status.message = "Maximum characters allowed reached")
				return status
			}
			if (value.length > 1) {
				; (status.valid = true), (status.message = "")
				return status
			}
			break

		case "email":
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
			if (value.length === 0) {
				; (status.valid = false), (status.message = "Please provide an email")
				return status
			}
			if (!emailRegex.test(value)) {
				status.valid = false
				status.message = "Email is not the in the correct format"
				return status
			}
			if (value.length > 145) {
				status.valid = false
				status.message = "Maximum characters allowed reached"
				return status
			}
			if (emailRegex.test(value)) {
				; (status.valid = true), (status.message = "")
				return status
			}
			break

		case "message":
			const regex = /^[\n\s]*$/ // checks if it contains only spaces and/or new lines \n
			if (value.length === 0) {
				status.valid = false
				status.message = "Message is required"
				return status
			}
			if (regex.test(value)) {
				status.valid = false
				status.message = "Message is required"
				return status
			}

			if (value.length < 501 && !regex.test(value)) {
				status.valid = true
				status.message = ""
				return status
			}
			if (value.length > 500 && !regex.test(value)) {
				status.valid = false
				status.message = "Maximum characters allowed reached"
				return status
			}
			break
	}

	return status
}

type GetInputStyleArgs = {
	validated?: boolean | null
	error?: ErrorType
}
export const getInputStyle = ({ validated, error }: GetInputStyleArgs) => {
	if (validated) return "outline-2 outline outline-emerald-400/70 bg-emerald-50"
	if (error) return "outline outline-2 outline-red-400/70 bg-red-50/50"

	return "bg-slate-100"
}
