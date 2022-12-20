import React from "react";
import Twitter from "../../assets/icons/Twitter";
import Linkedin from "../../assets/icons/Linkedin";
import Github from "../../assets/icons/Github";


const Footer = () => {
   return (
      <footer className='bg-blackBg'>
         <div className="content-container">
            <div className="flex flex-row sm:flex-row justify-between">
               <p className="mt-auto">{`© ${new Date().getFullYear()}`}</p>
               <div className="flex flex-row">
               {socialIcons.map((item, i) => {
                  return (
                     <a key={i} href={item.link} title={item.name} className='ml-3 cursor-pointer block border-b border-b-blue pb-2'>
                        {item.icon}
                     </a>
                  )

               })}
               </div>
            </div>
         </div>

      </footer>
   );
}

export default Footer;

const customClass = 'w-6 h-6 inline-block';
const stroke = '#E0E0E0';

const socialIcons = [
   {
      name: 'Twiiter',
      icon: <Twitter stroke={stroke} customClass={customClass} />,
      link: 'https://twitter.com/ibrahimaq30'

   },
   {
      name: 'LinkedIn',
      icon: <Linkedin stroke={stroke} customClass={customClass} />,
      link: 'https://www.linkedin.com/in/ibrahimaq/'
   },
   {
      name: 'Github',
      icon: <Github stroke={stroke} customClass={customClass} />
   }
]
