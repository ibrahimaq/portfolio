import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { changeToDark, changeToLight } from "../tools/tools";

export type ColorType = 'indigo' | 'cyan' | 'pink'

interface GlobalContextType {
	overlay: boolean,
	setOverlay: Dispatch<SetStateAction<boolean | false>>
	formIsSubmitted: boolean | null,
	setFormIsSubmitted: Dispatch<SetStateAction<boolean | null>>,
	color?: ColorType
	setTheme?: ({ }: any) => void;
	darkTheme: boolean;
	setDarkTheme: Dispatch<SetStateAction<boolean>>

}
export const GlobalContext = createContext<GlobalContextType>({
	overlay: false,
	setOverlay: function (value: SetStateAction<boolean>): void {
		throw new Error("setOverlay not implemented.");
	},
	setFormIsSubmitted: function (): void {
		throw new Error("setFormIsSubmitted function not implemented.");
	},
	formIsSubmitted: null,
	darkTheme: false,
	setDarkTheme: function (value: SetStateAction<boolean>): void {
		throw new Error("setBgWave not implemented.");
	},
});


interface Props {
	children: React.ReactNode,

}
export const GlobalContextProvider = ({ children }: Props) => {
	const [overlay, setOverlay] = useState<boolean>(false)
	const [formIsSubmitted, setFormIsSubmitted] = useState<boolean | null>(null)
	const [color, setColor] = useState<ColorType | undefined>(undefined);
	const [darkTheme, setDarkTheme] = useState<boolean>(false);

	const setTheme = (themeColor: string) => {
		localStorage.setItem(localStorageKeyName, themeColor);
		setColor(themeColor as ColorType)
		// console.log(themeColor)

	}

	const localStorageKeyName: string = 'ibrahimaq-theme';
	// check if color is stored in localStorage
	useEffect(() => {
		const getItem = localStorage.getItem(localStorageKeyName);
		if (getItem) {
			const color = getItem;
			setTheme(color);
		} else {
			setTheme('indigo')

		}

	}, [])

	useEffect(() => {
		if (darkTheme) {
			changeToDark()
			return
		}
		if (!darkTheme) {
			changeToLight()
			return
		}
	}, [darkTheme])


	return (
		<GlobalContext.Provider value={{ overlay, setOverlay, formIsSubmitted, setFormIsSubmitted, color, setTheme, darkTheme, setDarkTheme }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	const context = useContext(GlobalContext);
	return context
}