import React from "react";
import * as styles from "./styles.module.scss"
import {FaLinkedin, FaGithubSquare} from "react-icons/fa"
const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.sectionContentContainer}>
                <p>Made by Ibrahim Al-Quraishi</p>
                <div className={styles.footerIcons}>
                    <a href="https://www.linkedin.com/in/ibrahimaq/" rel="noreferrer" className={styles.icon} title="Linkedin account" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/ibrahimaq" rel="noreferrer" className={styles.icon} title="Github account" target="_blank"><FaGithubSquare /></a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
