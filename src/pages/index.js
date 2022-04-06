import React from "react"
import Layout from "../components/layout/Layout"
import Card from "../components/project-card/ProjectCard"
import * as styles from "./stylesIndex.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo/Seo";
import {FaTools, FaEnvelope,  FaHtml5, FaCss3, FaBootstrap, FaMdb, FaSass, FaReact, FaLaptopCode } from "react-icons/fa";
import {SiGatsby, SiGraphql, SiJavascript} from "react-icons/si";


export default function Home() {

  const handleForm = (e) =>{
    e.preventDefault();
    console.log(e);
  }

  const pageMetadata = useStaticQuery(graphql`
      {
        site{
          siteMetadata{
            description
          }
        }
      }
  `)
  const title = pageMetadata.site.siteMetadata.indexPageTitle;
  const description = pageMetadata.site.siteMetadata.description;
  return(
    <Layout>
      <Seo title="Home" metaDescription={description} keywords={"developer,frontend,portfolio,javascript,gatsby,react,html,css"}/>
      {/* ///////// LANDING/INTRO SECTION ////////////// */}
      <section className={styles.introSection}>
        <div className={styles.introTitle}>
        <h1>Hello, I'm Ibrahim.</h1>
        <h1>I build web apps!</h1>
        </div>
      </section>
       {/* ///////// TOOLS SECTION ////////////// */}
      <section className={styles.toolsSection}>
        <div className={styles.toolsTitleContainer}>
        <div className={styles.sectionTitle}>
        <h1>Tools I use</h1>
        <FaTools className={styles.sectionTitleIcon} />
        </div>
        </div>
        <div className={styles.sectionContentContainer}>
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
      {/* /////////////// PROJECTS SECTION ////////////// */}
      <section className={styles.projectsSection}>
        <div className={styles.sectionTitle}>
          <h1>Things I built</h1>
          <FaLaptopCode className={styles.sectionTitleIcon} />
        </div>
        <div className={`${styles.sectionContentContainer} ${styles.projectsCardsContainer}`}>
          <Card />
        </div>
      </section>
      {/*////////////////// CONTACT //////////////////*/}
      <section className={styles.contactSection}>
      <div className={styles.contactTitleContainer}>
        <div className={`${styles.sectionTitle}`}>
          <h1>Get in touch</h1>
          <FaEnvelope className={styles.sectionTitleIcon} />
        </div>
        </div>
        <div className={styles.sectionContentContainer}>
        <p>Drop me a message below</p>
        <form onSubmit={handleForm}>
          <label htmlFor="formName">Name</label>
          <input id="formName" type="text" required placeholder="Name" />
          <label htmlFor="formEmail">Email</label>
          <input id="formEmail" type="email" required placeholder="Email" />
          <label htmlFor="formMessage">Message</label>
          <textarea name="formMessage" id="formMessage" cols="30" rows="10" required placeholder="Enter message" />
          <button type="Submit">Send message</button>
        </form>
        </div>
      </section>
    </Layout>
  )
  
}
