import React from 'react';
import { MdOutlineColorLens } from 'react-icons/md';
import { IconContext } from "react-icons";
import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { themeClassBuilder, themeColors, themeColorsType } from '../tools/theme';
import { animated, useTransition } from "@react-spring/web";


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



	return (
		<>
			<div ref={ref} className={`z-[100] fixed rounded-full right-0 top-1/4 flex flex-col h-max`}>
				<IconContext.Provider value={{ className: 'text-white w-[30px] h-[30px]' }}>
				<button
					className={`p-1 ${themeClassBuilder({ color, el: 'bg' })} shadow-3d rounded-full cursor-pointer text-white`}
					onClick={() => setActive(!active)}
				>
					<MdOutlineColorLens />
				</button> 
				</IconContext.Provider>

				{themeColors.map((item: themeColorsType, i: number) => (
					<AnimatedButton key={i} active={active} index={i} themeObj={item} setTheme={setTheme} />
				))}

			</div>
		</>
	);
}

export default ThemeOption;





interface IAnimatedButton {
	index: number,
	active: boolean,
	themeObj: themeColorsType
	setTheme?: ((color: string) => void)
}

const AnimatedButton = ({index, active, themeObj, setTheme}: IAnimatedButton) => {

	const transitions = useTransition(active, {
		from: { opacity: 0, top: 0 },
		enter: { opacity: 1, top: index === 0 ? 48 : index===1 ? 86 : 126 },
		leave: { opacity: 0, top: 0, },
		delay: index * 100,
		config: { tension: 220, friction: 25},
		
		// trail: index*100,
	});


	const handleSelectedTheme = (color: string) => {

		if (setTheme !== undefined) {
			setTheme(color)
		}

	}

	return transitions(
		(style, item) =>
			item && (
				<animated.button
					style={style}
					disabled={!active}
					onClick={() => handleSelectedTheme(themeObj.color)}
					className={`absolute z-[-1] shadow-3d disabled:cursor-not-allowed w-[30px] h-[30px] left-1/2 -translate-x-1/2 rounded-full ${themeObj.bgClass}`}
				>
				</animated.button>
			)
	);
};
