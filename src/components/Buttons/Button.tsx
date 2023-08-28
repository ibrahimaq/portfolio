import { Link } from "gatsby";
import { useGlobalContext } from "../../context/GlobalContext";
import { themeClassBuilder } from "../../tools/theme";
import ButtonSpinner from "./ButtonSpinner";
import React from "react";

interface Props {
	label: string;
	borderColor?: string;
	backgroundColor?: string;
	textColor?: string;
	hoverColor?: string;
	className?: string;
	type?: 'button' | 'submit';
	onClick?: (e: any) => void;
	small?: boolean;
	large?: boolean;
	disabled?: boolean
	loading?: boolean
	link?: string
}

const Button = ({ label, link, className, borderColor, backgroundColor, small, large, type, onClick, textColor, disabled, loading }: Props) => {

	const { color } = useGlobalContext()

	const getBtnStyle = () => {
		return `relative w-full flex flex-col justify-center items-center border-none rounded-sm shadow-xl cursor-pointer font-medium tracking-wider transition-all duration-200 ease-in-out ${themeClassBuilder({ color, el: 'bg' })} ${className}
		${small && 'md:text-lg min-w-[130px] min-h-[45px]'}
		${large && 'text-lg md:text-xl min-w-[160px] min-h-[60px]'}
		${backgroundColor}
		${textColor ? textColor : 'text-white'}
		overflow-hidden
		hover:shadow-2xl hover:scale-105`
	}

	const btnStyle = `relative w-full flex flex-col justify-center items-center border-none rounded-sm shadow-xl cursor-pointer font-medium tracking-wider transition-all duration-200 ease-in-out ${themeClassBuilder({ color, el: 'bg' })} ${className}
		${small && 'md:text-lg min-w-[130px] min-h-[45px]'}
		${large && 'text-lg md:text-xl min-w-[160px] min-h-[60px]'}
		${backgroundColor}
		${textColor ? textColor : 'text-white'}
		overflow-hidden
		hover:shadow-2xl hover:scale-105`

	return (
		<>
			{link &&
				<Link
					className={btnStyle}
					to={link}
				>
					{label}
				</Link>
			}

			{!link &&
				<button
					className={btnStyle}
					type={type || 'button'}
					onClick={onClick}
					disabled={disabled}
				>
					{!loading && label}
					{loading && <ButtonSpinner />}


				</button>
			}
		</>



		// <button 
		//     className={`relative w-full flex flex-col justify-center items-center border-none rounded-sm shadow-xl cursor-pointer font-medium tracking-wider transition-all duration-200 ease-in-out ${themeClassBuilder({ color, el: 'bg' })} ${className}
		//         ${small && 'md:text-lg min-w-[130px] min-h-[45px]'}
		//         ${large && 'text-lg md:text-xl min-w-[160px] min-h-[60px]'}
		//         ${backgroundColor}
		//         ${textColor ? textColor : 'text-white'}
		//         overflow-hidden
		//         hover:shadow-2xl hover:scale-105
		//         `}
		//     type={type || 'button'}
		//     onClick={onClick}
		//     disabled={disabled}
		//     >
		//     {!loading && label}
		//     {loading && <ButtonSpinner />}


		// </button>
		// <button className={`border-none rounded-full bg-zinc-900 cursor-pointer ${className}`}
		// type={type || 'button'}
		// onClick={onClick}
		// >
		//     <span className={`border-2 border-zinc-900 text-xl py-3 px-7 md:text-xl md:py-4 md:px-10 font-medium tracking-wider  block transition-all duration-200 ease-in-out rounded-full ${textColor ? textColor : 'text-white' } ${backgroundColor ? backgroundColor : themeClassBuilder({ color, el: 'bg' }) } 
		//     -translate-y-[4px] hover:-translate-y-0 cursor-pointer
		//     `}

		//     >{label}</span>

		// </button>
	);
}

export default Button;


// ${small && 'py-2 px-5 md:text-lg md:py-2 md:px-5'}
// ${large ? 'py-3 px-7 md:text-xl md:py-4 md:px-10': ''}