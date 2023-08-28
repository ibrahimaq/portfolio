import React from "react";
import { ErrorType } from "./Textfield";

interface IErrorMessageProps {
	error: ErrorType;
}
const ErrorMessage = ({ error }: IErrorMessageProps) => {
	return (
		<p className="pt-3 text-red-400 text-sm">
			{error}
		</p>
	);
}

export default ErrorMessage;