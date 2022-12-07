import React from "react"
import { Link } from "gatsby"
import { useState } from "react";
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);


  const handleSideMenu = () =>{
    setIsOpen(!isOpen);
  }
  return (

    <header className='w-full bg-blackBg relative overflow-hidden'>
      <div className='content-container flex flex-row justify-between items-center'>
        <Link to="/" className='text-font-greylight text-2xl no-underline' title="Home page">I Q</Link>

        {/* Desktop */}

          <nav className=''>
            <ul className='h-full flex flex-row'>
              {navLinks.map((item, i) => (
                <li key={i} className='ml-5'>
                  <Link to={item.link}
                    className='text-font-greylight no-underline block my-5 sm:my-10 relative'
                    activeClassName="text-white before:content-['▴'] before:block before:absolute 
                                    before:top-3/4 before:left-1/2 before:-translate-x-1/2"
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        {/* <div className={styles.headerIconContainer}>
        <a href="https://twitter.com/ibrahimaq30" rel="noreferrer" className={styles.headerIcon} title="Twitter account" aria-label="Twitter" target="_blank"><FaTwitterSquare /></a>
        <a href="https://www.linkedin.com/in/ibrahimaq/" rel="noreferrer" className={styles.headerIcon} title="Linkedin account" aria-label="Linkedin" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/ibrahimaq" rel="noreferrer" className={styles.headerIcon} title="Github account" aria-label="Github" target="_blank"><FaGithubSquare /></a>
        </div> */}

        {/* BURGER BUTTON FOR MOBILE MENU */}
        {/* <button className='hidden' onClick={handleSideMenu}>
          <IconContext.Provider value={{size: "2em"}}>
           <BiMenu />
          </IconContext.Provider>
        </button> */}
      </div>

      {/* MOBILE MENU */}
      {/* <nav className={`
          md:hidden fixed bg-blackBg top-10 w-4/5 -right-full h-full z-50 transition-all duration-300 ease-in-out
          rounded-tl-md
          ${isOpen && '-right-0'}
        `}>
        <ul className='h-full flex flex-col'>
          {navLinks.map((item, i) => (
            <li key={i} className='mr-5'>
              <Link to={item.link}
                className='text-font-greylight no-underline block'
                activeClassName="text-white"
              >{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  )
}

export default Header

const navLinks = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Blogs',
    link: '/blogs'
  },
  {
    label: 'Contact',
    link: '/contact'
  },
]
