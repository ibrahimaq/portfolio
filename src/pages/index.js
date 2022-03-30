import React from "react"
import Layout from "../components/layout/Layout"
import * as styles from "./stylesIndex.module.scss"
import {FaTools,  FaHtml5, FaCss3, FaBootstrap, FaMdb, FaSass, FaJs, FaReact } from "react-icons/fa";
import {SiGatsby, SiGraphql, SiJavascript} from "react-icons/si";
export default function Home() {
  return(
    <Layout>
      {/* ///////// LANDING/INTRO SECTION ////////////// */}
      <section className={styles.intro}>
        <div className={styles.introTitle}>
        <h1>Hello, I'm Ibrahim.</h1>
        <h1>I build web apps!</h1>
        </div>
      </section>
       {/* ///////// TOOLS SECTION ////////////// */}
      <section className={styles.tools}>
        <div className={styles.toolsTitle}>
        <h1>Tools I use</h1>
        <FaTools className={styles.toolIcon} />
        </div>
        <div className={styles.toolsContainer}>
        <div className={styles.toolsGrid}>
          <div className={styles.gridItem}><FaHtml5 color="#e34c26" /></div>
          <div className={styles.gridItem}><FaCss3 color="#264de4" /></div>
          <div className={styles.gridItem}><FaBootstrap color="#59287a" /></div>
          <div className={styles.gridItem}><FaSass color="#cc6699" /></div>
          <div className={styles.gridItem}><SiJavascript color="#f7df1e" style={{backgroundColor: "black"}} /></div>
          <div className={styles.gridItem}><FaReact color="#61dafb" /></div>
          <div className={styles.gridItem}><SiGatsby color="#663399" /></div>
          <div className={styles.gridItem}><SiGraphql color="#e10098" /></div>
        </div>
       
        <p>Whilst I am familiar with these technologies, I am currently learning Node.js and Express.</p>
        
        </div>
      </section>
    </Layout>
  )
  
}
