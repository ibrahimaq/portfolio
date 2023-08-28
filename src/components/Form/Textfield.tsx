import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useEffect, useRef, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import React from "react";
import { validator, getInputStyle } from "../../tools/tools";

export interface ITextfieldProps {
	type: 'name' | 'email'
	id: string
	onValueUpdate: (value: string, fieldId: string) => void
	placeholder?: string
	label: string;
	initialError?: ErrorType
}
export type ErrorType = string | null

const Textfield = ({type, id, onValueUpdate, placeholder, label, initialError}: ITextfieldProps) => {
	const [value, setValue] = useState<string>('');
	const [error, setError] = useState<ErrorType>(initialError || '')
	const [validated, setValidated] = useState<boolean | null>(null);


	useEffect(() => {
		if (validated) onValueUpdate(value, id)
		// if (!validated) onValueUpdate('', id)
		
	}, [value, validated])

	useEffect(() => {
		if (initialError) setError(initialError)
	}, [initialError])


	const onBlur = () => {
		setError('')
		setValidated(false)
		
		if (type === 'name') {
			const result = validator("name", value)
			if (result.valid) {
				setValidated(true)
				setError('')
			}
			if (!result.valid) {
				setValidated(false)
				setError(result.message)
			}
		}
		if (type === 'email') {
			const result = validator("email", value)
			if (result.valid) {
				setValidated(true)
				setError('')
			}
			if (!result.valid) {
				setValidated(false)
				setError(result.message)
			}
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		
		// if (type === 'name') {
		// 	const result = validator("name", value)
		// 	if (result.valid) {
		// 		setValidated(true)
		// 		setError('')
		// 	}
		// 	if (!result.valid) {
		// 		setValidated(false)
		// 		setError(result.message)
		// 	}
		// }
		// if (type === 'email') {
		// 	const result = validator("email", value)
		// 	if (result.valid) {
		// 		setValidated(true)
		// 		setError('')
		// 	}
		// 	if (!result.valid) {
		// 		setValidated(false)
		// 		setError(result.message)
		// 	}
		// }
	}

	const handleFocus = () => {
		// setError('')
		// setValidated(false)
	}

	// prevent form submission on Enter
	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") e.preventDefault();
	};

	const validate = () => {

	}


	return (
		<div className="flex flex-col">
			 {/* browsers are ignoring autoComplete=off for security reasons. This hidden field is the hack. */}
			 <input type="text" name="fake-username" style={{ display: 'none' }} />
			<Label id={id} label={label} />
			<input
				id={id}
				name={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => handleChange(e)}
				autoComplete="off"
				onFocus={handleFocus}
				onBlur={e => onBlur()}
				onKeyDown={e => onKeyDown(e)}
				className={`px-5 py-3 rounded-md focus:outline-sky-500
				${getInputStyle({ error, validated })}
				
				
				`}
			/>
			{error && <ErrorMessage error={error} />}
		</div>
	);
}

export default Textfield;

// ${error && "outline outline-2 outline-red-400/70 bg-red-50/50"}
// ${validated && "outline-2 outline outline-emerald-400/70 bg-emerald-50"}
// ${!error && !validated && "bg-slate-100"}