import React, { ReactElement } from 'react';
import { TiSocialTwitterCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
import { IconContext, IconType } from "react-icons";
import Container from './Container';
import { useGlobalContext } from '../context/GlobalContext';
import { themeClassBuilder } from '../tools/theme';
import Button from './Buttons/Button';

interface ISayHello {
	heading?: string
	body?: string
}

const SayHello = ({heading, body}: ISayHello) => {
	const { color, setOverlay } = useGlobalContext()


	return (
		<section>
			<Container className='py-20'>
				<div className="w-full flex flex-col items-center bg-white rounded-md mx-auto">
					{heading && 
						<h2 className='text-center sm:text-start text-3xl md:text-4xl text-darkFont'>{heading}</h2>
					}
					{body && 
						<p className='text-center my-4 text-darkFont text-xl'>{body}</p>
					}
					{/* <div className='flex flex-row justify-between items-center w-full px-[40px]'> */}

					
						<div className='flex flex-row justify-center space-x-[10px]'>
							{/* <SocialComp color={color} /> */}
							<IconContext.Provider value={{ className: `w-[70px] h-[70px] ${themeClassBuilder({ color, el: 'text' })}` }}>
								{socials.map((item, i) => (
									<a key={i} href={item.link} className='shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300  rounded-full'>
										{item.icon}
									</a>
								))}
							</IconContext.Provider>
						</div>
						{/* <div className='w-fit mx-auto sm:mx-0 mt-5'>
							<Button label="Let's chat" large onClick={() => setOverlay(true)} />
						</div> */}
					{/* </div> */}
				</div>
			</Container>
		</section>
	);
}

export default SayHello;




interface ISocialComp {
	color?: string
}

const SocialComp = ({color}: ISocialComp) => {
	return (
		<IconContext.Provider value={{ className: `w-[70px] h-[70px] ${themeClassBuilder({ color, el: 'text' })}` }}>
			{socials.map((item, i) => (
				<a key={i} href={item.link} className='shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300  rounded-full'>
					{item.icon}
				</a>
			))}
		</IconContext.Provider>
	)
}

type socialIconsType = {
	icon: ReactElement,
	link: string
}[]

const socials: socialIconsType = [
	{
		icon: <TiSocialTwitterCircular />,
		link: 'https://twitter.com/ibrahimaq30',
	},
	{
		icon: <TiSocialLinkedinCircular />,
		link: 'https://www.linkedin.com/in/ibrahimaq/',
	},
]