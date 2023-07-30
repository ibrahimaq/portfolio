
interface ILabelProps {
    id: string,
    label: string,
}
const Label = ({id, label}: ILabelProps) => {
    return (
        <label htmlFor={id} className='text-darkFont mb-2 w-fit'>{label}</label>
     );
}
 
export default Label;