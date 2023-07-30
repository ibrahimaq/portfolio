//@ts-check
import React from "react";
import Button from "./Buttons/Button";
import Container from "./Container";
import { useGlobalContext } from "../context/GlobalContext";
import { themeClassBuilder, getBorderColor } from "../tools/theme";


const Hero = () => {

	const { color } = useGlobalContext();
	const { setOverlay } = useGlobalContext();




	return (
		<section className="relative -mt-[76px] md:mt-0 min-h-[800px] pt-28">

			<div className="bg-wave-top"></div>
			<div className="bg-wave"></div>


			<Container className="pt-28 md:pt-24 relative" >
				<div className="flex flex-col items-center">
					<h1 className="text-5xl md:text-6xl max-w-[1000px] text-center"><span className={`${themeClassBuilder({color, el: 'text'})} tracking-wide`}>Hi I'm Ibrahim.</span><br />I'm a frontend developer based in London.</h1>
					<p className="text-2xl md:text-2xl text-darkFont font-light text-center my-5 md:my-8 tracking-wider max-w-[800px]">I enjoy building modern stylish interfaces and continuously learning new tools and technologies.</p>
					<div>
						<Button label="Let's chat" onClick={() => setOverlay(true)} large />
					</div>
				</div>
				{/* <div className={`relative mx-auto md:mx-0 mb-10 md:mb-0 md:absolute md:-bottom-[80px] md:right-[40px] w-[250px] h-[250px] border-4 rounded-full ${color && getBorderColor(color)} `}>
                    <Image 
                    src={avatar}
                    alt='avatar'
                    className="md:mt-3"
                    fill
                    />
                </div> */}
			</Container>
		</section>
	);
}

export default Hero;