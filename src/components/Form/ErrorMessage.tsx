import { ErrorType } from "./Textfield";

interface IErrorMessageProps {
    error: ErrorType;
}
const ErrorMessage = ({error}: IErrorMessageProps) => {
    return ( 
        <p className="mt-5 py-5 pl-5 text-red-400 text-sm border-l-2 border-red-400/70">
        {error}
      </p>
     );
}
 
export default ErrorMessage;