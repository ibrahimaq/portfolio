import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import avatar from '../assets/images/myAvatar.png'
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../context/GlobalContext";
import { themeClassBuilder } from "../tools/theme";

interface IAboutMe {
  data: AboutMeDataType
}

export type AboutMeDataType = {
  
}
const AboutMe = () => {
  const { color } = useGlobalContext()

  const { ref: imgRef, inView: imgInView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true
  });

  const { ref: textRef, inView: textInView } = useInView({
    /* Optional options */
    threshold: 0.75,
    triggerOnce: true
  });


const pStyle = `text-2xl font-light transition-all duration-500 ${textInView ? 'opacity-100' : 'opacity-0'}`

  return ( 
    <section className="py-20">
    <Container className="flex flex-col md:flex-row md:justify-between">
      <div className="md:w-1/2">

        {/* <h2 className={`text-dark mb-5
        ${darkTheme && 'text-slate-200'}
        `}>About</h2> */}
        <SectionTitle title="About" />

        <p 
          className={`${pStyle} mt-5`}
          ref={textRef}
          >I&apos;m a Maths teacher turned web developer. I&apos;ve brought my love for learning and problem-solving into the world of web development.
        </p>

        <p className={`${pStyle} my-5 delay-[200ms]`}>
          I&apos;m addicted to building stylish, modern websites and web applications.
        </p>

        <p className={`${pStyle} delay-[400ms]`}>
          Let&apos;s collaborate on your next project and bring some serious web magic to life!
        </p>
    
      </div>


      <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end pr-[64px] mt-12 md:mt-0">
        <div ref={imgRef} className="relative max-w-[300px] md:min-w-[250px] lg:min-w-[300px] flex justify-center">
          <StaticImage
            src='../assets/images/myAvatar.png'
            alt='avatar'
            placeholder="blurred"
            className={`shadow-3d object-fit md:w-[250px] lg:w-[300px] relative rounded-full bg-white p-1 z-[1] transition-all duration-300
            ${imgInView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-[20px] translate-y-[20px]'}
            `}
          />
          <span
            className={`absolute w-full h-full md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] block rounded-full transition-all duration-500 delay-150
          ${themeClassBuilder({ color, el: 'bg' })}
          ${imgInView ? 'opacity-100 top-[40px] left-[70px]' : 'opacity-0 top-[20px] left-[20px]'}

          `} />
        </div>
      </div>
    </Container>
  </section>
   );
}
 
export default AboutMe;