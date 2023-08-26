import React, { ReactElement } from 'react';
import { TiSocialTwitterCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
import { IconContext, IconType } from "react-icons";
import Container from './Container';
import { useGlobalContext } from '../context/GlobalContext';
import { themeClassBuilder } from '../tools/theme';
import Button from './Buttons/Button';


const SayHello = () => {
	const { color, setOverlay } = useGlobalContext()
	return (
		<section>
		<Container className='py-20'>
			<div className="w-full flex flex-col items-center bg-white rounded-md">
				{/* <div className='sm:pr-5'> */}
					<h2 className='text-center sm:text-start text-3xl md:text-4xl text-darkFont'>Say Hello &#128075;</h2>
					<p className='text-center sm:text-start my-3 text-darkFont text-xl'>Get in touch for a friendly chat, or find me on any of these social mediums.</p>
					<div className='flex flex-row justify-center'>
						<SocialComp color={color} />
					</div>
					<div className='w-fit mx-auto sm:mx-0 mt-5'>
						<Button label="Let's chat" large onClick={() => setOverlay(true)} />
					</div>
				{/* </div> */}
				{/* <div className='hidden sm:flex flex-row sm:justify-center sm:ml-auto'>
					<SocialComp color={color}  />
				</div> */}
			</div>
		</Container>
	</section>
		// <section className='py-20'>
		// 	<Container>
		// 		<div className="w-full flex flex-col sm:flex-row sm:space-between sm:items-center bg-white rounded-md">
		// 			<div className='sm:pr-5'>
		// 				<h2 className='text-center sm:text-start text-3xl md:text-4xl text-darkFont'>Say Hello &#128075;</h2>
		// 				<p className='text-center sm:text-start my-3 text-darkFont text-xl'>Get in touch for a friendly chat, or find me on any of these social mediums.</p>
		// 				<div className='flex flex-row justify-center sm:hidden'>
		// 					<SocialComp color={color} />
		// 				</div>
		// 				<div className='w-fit mx-auto sm:mx-0 mt-5'>
		// 					<Button label="Let's chat" large onClick={() => setOverlay(true)} />
		// 				</div>
		// 			</div>
		// 			<div className='hidden sm:flex sm:flex-row sm:justify-center sm:ml-auto'>
		// 				<SocialComp color={color}  />
		// 			</div>
		// 		</div>
		// 	</Container>
		// </section>
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

type socialsType = objectType[]
type objectType = {
	icon: ReactElement,
	link: string
}

const socials: socialsType = [
	{
		icon: <TiSocialTwitterCircular />,
		link: 'https://twitter.com/ibrahimaq30',
	},
	{
		icon: <TiSocialLinkedinCircular />,
		link: 'https://www.linkedin.com/in/ibrahimaq/',
	},
]