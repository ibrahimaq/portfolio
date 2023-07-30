import React from 'react';
import { MdOutlineColorLens } from 'react-icons/md';
import { IconContext } from "react-icons";
import { useEffect, useRef, useState, createRef } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { themeClassBuilder, themeColors, themeColorsType, getDuration } from '../tools/theme';

const ThemeOption = () => {
	const [active, setActive] = useState<boolean>(false);

	const { setTheme, color } = useGlobalContext();

	const ref = useRef<HTMLDivElement>(null);


	const handleOutsideClick = (event: any) => {

		if (ref.current && (!ref.current.contains(event.target))) {
			setActive(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick)

		return () => document.removeEventListener('click', handleOutsideClick);
	}, [])

	const handleSelectedTheme = (color: string) => {

		if (typeof setTheme !== 'undefined') {
			setTheme(color)
		}

	}


	return (

		<div className={`fixed z-[50] translate-y-[150px] rounded-full transition-all duration-500 right-0 ${active ? 'h-fit' : 'h-0'}`}
			ref={ref}
			aria-hidden={true}
		>
			{/* <span className={`w-full absolute top-0 left-0 rounded-full z-[-1] transition-all ease-in-out duration-1000
                            ${active ? 'h-full opacity-20' : 'h-0 opacity-0'}
                            ${themeClassBuilder({ color, el: 'bg' })}
            `}></span> */}
			<IconContext.Provider value={{ className: 'text-white w-[30px] h-[30px]' }}>
				<button
					className={`mx-2 p-1 ${themeClassBuilder({ color, el: 'bg' })} rounded-full cursor-pointer shadow-2xl text-white`}
					onClick={() => setActive(!active)}
				>
					<MdOutlineColorLens />

				</button>
				<ul
					className={`flex flex-col items-center mt-5 gap-5 transition-all duration-1000 relative border-2
                    ${active ? 'w-full' : 'w-0'}
                `}>
					{themeColors.map((item: themeColorsType, i:number) => (
						<li
							key={i}

							className={` w-[30px] h-[30px]`}
						>
							<button
								className={`w-full h-full rounded-full transition-all duration-200 relative ease-in-out
                                    ${item.bgClass} 
                                    ${active ? 'left-0' : 'left-[1000px]'} 
																		${i === 0 && ''}
																		${i === 1 && 'delay-200'}
																		${i === 2 && 'delay-[400ms]'}
                            `}
								tabIndex={active ? 0 : -1}
								onClick={() => handleSelectedTheme(item.color)}
							></button>
						</li>
					))}
				</ul>
			</IconContext.Provider>
		</div>
	);
}

export default ThemeOption;

