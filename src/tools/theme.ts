export type themeColorsType = {
	color: string
	textClass: string
	bgClass: string
}
// used in ThemeOption component to display coloured buttons
export const themeColors: themeColorsType[] = [
	{
		color: "indigo",
		textClass: "text-indigo-600",
		bgClass: "bg-indigo-600",
	},
	// {
	//     color: 'emerald',
	//     textClass: 'text-emerald-600',
	//     bgClass: 'bg-emerald-600'
	// },
	{
		color: "cyan",
		textClass: "text-cyan-600",
		bgClass: "bg-cyan-600",
	},
	{
		color: "pink",
		textClass: "text-pink-600",
		bgClass: "bg-pink-600",
	},
]

type getColorClassProps = {
	color?: "indigo" | "emerald" | "cyan" | "pink" | string
	el?: string
}
// returns a tailwind class based on the color and css property
export const themeClassBuilder = ({ color, el }: getColorClassProps) => {
	let colorClass = el + "-" + color + "-" + "600"

	return colorClass
}

// issue with border-color not showing using getTheme so below is a fix
export const getBorderColor = (color?: string) => {
	switch (color) {
		case "indigo":
			return "border-indigo-600"
		case "cyan":
			return "border-cyan-600"
		case "pink":
			return "border-pink-600"
		case "emerald":
			return "border-emerald-600"
		default:
			return "border-indigo-600"
	}
}

export const getFocusOutlineColor = (color?: string) => {
	switch (color) {
		case "indigo":
			return "focus:outline-indigo-600"
		case "cyan":
			return "focus:outline-cyan-600"
		case "pink":
			return "focus:outline-pink-600"
		case "emerald":
			return "focus:outline-emerald-600"
		default:
			return "focus:outline-indigo-600"
	}
}

export const getHexColor = (color: string) => {
	switch (color) {
		case "indigo":
			return "#4f46e5"
		case "cyan":
			return "#0891b2"
		case "pink":
			return "#db2777"
		case "emerald":
			return "#059669"

		default:
			// zinc-900
			return "#18181b"
	}
}

export const getBeforeBgColor = (color?: string) => {
	switch (color) {
		case "indigo":
			return "before:bg-indigo-600"
		case "cyan":
			return "before:bg-cyan-600"
		case "pink":
			return "before:bg-pink-600"
		case "emerald":
			return "before:bg-emerald-600"
		default:
			return "before:-indigo-600"
	}
}

// fix for duration
export const getDuration = (i: number) => {
	switch (i) {
		case 0:
			return "duration-[400ms]"
		case 1:
			return "duration-[600ms]"
		case 2:
			return "duration-[800ms]"
		case 3:
			return "duration-[1000ms]"

		default:
			return "duration-[700ms]"
	}
}

// export const changeToDark = () => {
// 	document.body.classList.add("dark")
// }
// export const changeToLight = () => {
// 	document.body.classList.remove("dark")
// }
