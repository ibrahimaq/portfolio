//@ts-check
import React from "react";
import Button from "./Buttons/Button";
import Container from "./Container";
import { useGlobalContext } from "../context/GlobalContext";
import { themeClassBuilder, getBorderColor } from "../tools/theme";

interface IHeroBgGradient {
	data: HeroBgGradientDataType

}
export type HeroBgGradientDataType = {
	headingTopLine?: string
	headingBottomLine?: string
	bodyCopy?: string
}


const HeroBgGradient = ({data}: IHeroBgGradient) => {

	const { color } = useGlobalContext();
	const { setOverlay } = useGlobalContext();


	const {headingTopLine, headingBottomLine, bodyCopy} = data


	return (
		<section className="relative -mt-[76px] md:mt-0 min-h-[800px] pt-28">

			<div className="bg-wave-top"></div>
			<div className="bg-wave"></div>


			<Container className="pt-28 md:pt-24 relative" >
				<div className="flex flex-col items-center">
					
					<h1 
					className="text-5xl md:text-6xl max-w-[1000px] text-center"
					>
						{headingTopLine &&
						<span className={`${themeClassBuilder({color, el: 'text'})} tracking-wide`}
						>{headingTopLine}
						</span>

						}
						{headingBottomLine &&
							<>
							<br />{headingBottomLine}
							</>
						}

					</h1>

					{bodyCopy &&
						<p className="text-2xl md:text-2xl text-dark font-light text-center my-5 md:my-8 tracking-wider max-w-[800px]">{bodyCopy}</p>
					}
					<div>
						<Button label="Let's chat" onClick={() => setOverlay(true)} large />
					</div>

				</div>
			</Container>
		</section>
	);
}

export default HeroBgGradient;