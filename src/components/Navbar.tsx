import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { themeClassBuilder, getBeforeBgColor } from "../tools/theme";
import { useGlobalContext } from "../context/GlobalContext";
import Button from "./Buttons/Button";
import avatar from '../assets/images/myAvatar.svg'

const Navbar = () => {
	const [active, setActive] = useState<number>(-1);
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const [scroll, setScroll] = useState<boolean>(false)

	const { color } = useGlobalContext();
	const { overlay, setOverlay } = useGlobalContext();

	const handleClick = (index: number) => {
		setActive(index);
	};

	const handleMobileLetsChatClick = () => {
		setOverlay(true);
	};

	useEffect(() => {
		if (mobileMenu) {
			document.body.classList.add("overflow-y-hidden");
			console.log("no scroll");
		} else if (!mobileMenu) {
			document.body.classList.remove("overflow-y-hidden");
			console.log("scroll");
		}
	}, [mobileMenu]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScroll(true)
			} else setScroll(false)
		}
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [])

	const getDelayTime = (i: number) => {
		switch (i) {
			case 0:
				return "700ms";
			case 1:
				return "800ms";
			case 2:
				return "900ms";
			case 3:
				return "1000ms";
		}
	};

	const getTextColor = () => {
		return themeClassBuilder({ color, el: "text" });
	};

	return (
		<>

			{/* desktop */}
			{/* <Container className="hidden md:block pt-8 mx-auto"> */}
			<div className={`hidden md:block md:absolute md:w-full md:pt-8 bg-transparent z-10 `}>
				<div className="flex flex-row justify-between items-center px-16 max-w-[1440px] mx-auto">

					<div className="w-[40px] h-[40px]"><img src={avatar} alt="avatr of Ibrahim" className="object-cover" /></div>
					
					{/* <NavIcon bgColor={themeClassBuilder({ color, el: "bg" })} /> */}
					<nav className="flex flex-row items-center mr-[30px] ml-auto">
						<ul className="flex flex-row">
							{navLinks.map((item, i) => (
								<li key={i} className="mx-3">
									<Link
										to={item.link}

										className={`
										text-xl tracking-wider font-light text-zinc-900 relative flex
										before:absolute before:block before:bottom-0 before:left-0 before:h-[3px] before:w-0 hover:before:w-full before:transition-all before:duration-300
										
										${getBeforeBgColor(color)}
										`}
										onClick={() => handleClick(i)}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className="">
						<Button label="Let's chat" small onClick={() => setOverlay(true)} />
					</div>

				</div>
			</div>
			{/* </Container> */}

			{/* Mobile */}
			<div className={`md:hidden w-full fixed z-[100] transition-all duration-300 
					${scroll && 'bg-white/40 shadow-md backdrop-blur-md'}
					${overlay ? 'opacity-0 top-[-200px]' : 'opacity-100 top-0'}
			`}>
				<div
					className={`relative flex flex-row justify-between items-center py-5 px-6
                `}
				>
					<div className="w-[40px] h-[40px]"><img src={avatar} alt="avatr of Ibrahim" className="object-cover" /></div>

					{/* <NavIcon bgColor={themeClassBuilder({ color, el: "bg" })} /> */}
					<button
						className="flex flex-col justify-between items-center h-[36px] w-[40px] py-[8px]"
						aria-label="toggle navigation menu"
						onClick={() => setMobileMenu(!mobileMenu)}
					>
						<div
							className={`${mobileMenu
								? "bg-white origin-top-left rotate-45 -translate-y-[2px]"
								: `${themeClassBuilder({ color, el: "bg" })}`
								} w-[32px] h-[2px] transition-all duration-200`}
						></div>
						<div
							className={`${mobileMenu
								? "bg-white opacity-0"
								: `${themeClassBuilder({ color, el: "bg" })}`
								} w-full h-[2px] transition-all duration-200`}
						></div>
						<div
							className={`${mobileMenu
								? "bg-white origin-bottom-left -rotate-45 translate-y-[2px]"
								: `${themeClassBuilder({ color, el: "bg" })}`
								} w-[32px] h-[2px] transition-all duration-200`}
						></div>
					</button>
				</div>
				<nav
					className={`${mobileMenu ? "scale-100 opacity-100  z-[-1]" : "scale-0 opacity-0 "
						} 
                w-full absolute top-0 transition-all duration-700 origin-top-right`}
				>
					<span
						className={`absolute rounded-full right-0  w-[30px] h-[30px] transition-all duration-700 
						${themeClassBuilder({ color, el: "bg" })}
            ${mobileMenu ? "scale-[80]" : "scale-0"}
            `}
					></span>
					<ul className={`mt-[150px]`}>
						{navLinks.map((item, i) => (
							<li key={i} className={`mb-[10px]`}>
								<Link
									to={item.link}
									className={`mobileMenu-item-animation flex md:hidden text-2xl tracking-wider font-medium text-white px-6 py-2 text-center relative w-full flex-row justify-center
									${mobileMenu ? "in" : "out"}
                  `}
									style={{ transitionDelay: mobileMenu ? getDelayTime(i) : "" }}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					<div
						className={`mobileMenu-item-animation px-[24px] mt-[20px] relative flex flex-row justify-center max-w-[300px] mx-auto
                    ${mobileMenu
								? "mobileMenu-lets-chat-btn-in"
								: "mobileMenu-lets-chat-btn-out"
							}
                    `}
					>
						<Button
							label="Let's chat"
							backgroundColor="bg-white"
							large
							textColor={themeClassBuilder({ color, el: "text" })}
							onClick={handleMobileLetsChatClick}
						/>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;

export const navLinks = [
	{
		label: "Home",
		link: "/",
	},
	{
		label: "About",
		link: "/about",
	},
	{
		label: "Blogs",
		link: "/blogs",
	},
];

interface INavIconProps {
	bgColor: string;
}

const NavIcon = ({ bgColor }: INavIconProps) => {
	return (
		<Link
			to="/"
			className={`w-[40px] h-[40px] flex flex-row justify-center items-center rounded-md shadow-lg text-white text-2xl
        ${bgColor}
        `}
		>
			I
		</Link>
	);
};