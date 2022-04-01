import React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.scss"
import {FaLinkedin, FaGithubSquare} from "react-icons/fa";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.navBrand} title="Home page">I Q</Link>
        <nav className={styles.navList}>
          <ul>
            <li >
               <Link to="/" className={styles.navItem} activeClassName={styles.activeNavItem}>Home</Link>
            </li>
            <li >
              <Link to="/blogs" className={styles.navItem} activeClassName={styles.activeNavItem}>Blogs</Link>
            </li>
            <li >
              <Link to="/about" className={styles.navItem} activeClassName={styles.activeNavItem}>About</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.headerIconContainer}>
        <a href="https://www.linkedin.com/in/ibrahimaq/" className={styles.headerIcon} title="Linkedin account" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/ibrahimaq" className={styles.headerIcon} title="Github account" target="_blank"><FaGithubSquare /></a>
        </div>
      </div>
    </header>
  )
}

export default Header
