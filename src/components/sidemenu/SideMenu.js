

const SideMenu = () => {
    return ( 
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
     );
}
 
export default SideMenu;