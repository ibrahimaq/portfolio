import React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.scss"
import {FaLinkedin, FaGithubSquare} from "react-icons/fa";
import {BiMenu} from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from "react";
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);


  const handleSideMenu = () =>{
    setIsOpen(!isOpen);
  }
  return (

    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.navBrand} title="Home page">I Q</Link>
          <nav className={isOpen? `${styles.navList} ${styles.navShow}` : styles.navList}>
            <ul>
              <li >
                  <Link to="/" className={styles.navItem} activeClassName={styles.activeNavItem}>Home</Link>
              </li>
              <li >
                <Link to="/blogs" className={styles.navItem} activeClassName={styles.activeNavItem}>Blogs</Link>
              </li>
              <li >
                <Link to="/contact" className={styles.navItem} activeClassName={styles.activeNavItem}>About</Link>
              </li>
            </ul>
          </nav>
        <div className={styles.headerIconContainer}>
        <a href="https://www.linkedin.com/in/ibrahimaq/" rel="noreferrer" className={styles.headerIcon} title="Linkedin account" aria-label="Linkedin" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/ibrahimaq" rel="noreferrer" className={styles.headerIcon} title="Github account" aria-label="Github" target="_blank"><FaGithubSquare /></a>
        </div>
        <button className={styles.burgerBtn} onClick={handleSideMenu}>
          <IconContext.Provider value={{size: "2em"}}>
           <BiMenu />
          </IconContext.Provider>
        </button>
      </div>
    </header>
  )
}

export default Header
