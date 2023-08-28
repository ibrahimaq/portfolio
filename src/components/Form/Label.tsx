import React from "react"
interface ILabelProps {
    id: string,
    label: string,
}
const Label = ({id, label}: ILabelProps) => {
    return (
        <label htmlFor={id} className='text-dark mb-2 w-fit'>{label}</label>
     );
}
 
export default Label;