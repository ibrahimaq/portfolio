import React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.scss"
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">Ibrahim</Link>
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
      </div>
    </header>
  )
}

export default Header
