import React from "react";
import * as styles from "./styles.module.scss"
import {FaLinkedin, FaGithubSquare, FaReact, FaTwitterSquare} from "react-icons/fa"
import {SiGatsby, SiNetlify, SiContentful} from "react-icons/si"
const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.sectionContentContainer}>
                <div className={styles.footerIcons}>
                    <a href="https://twitter.com/ibrahimaq30" rel="noreferrer" className={styles.icon} title="Twitter account" aria-label="Twitter" target="_blank"><FaTwitterSquare /></a>
                    <a href="https://www.linkedin.com/in/ibrahimaq/" rel="noreferrer" className={styles.icon} title="Linkedin account" target="_blank" aria-label="Linkedin"><FaLinkedin /></a>
                    <a href="https://github.com/ibrahimaq" rel="noreferrer" className={styles.icon} title="Github account" target="_blank" aria-label="Github"><FaGithubSquare /></a>
                </div>
                <p>Made by Ibrahim Al-Quraishi</p>
                
                <div className={styles.footerFrameworkLogos}>
                    <a href="https://reactjs.org/"> <span>React</span><FaReact color="#61dafb" /></a>
                    <a href="https://www.gatsbyjs.com/"> <span>Gatsby</span><SiGatsby color="#663399" /></a>
                    <a href="https://www.netlify.com/"> <span>Netlify</span><SiNetlify color="#00C7B7" /></a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
