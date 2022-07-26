import React from "react"
import Layout from "../components/layout/Layout"
import Card from "../components/project-card/ProjectCard"
import ContactForm from "../components/contact-form/ContactForm"
import * as styles from "./stylesIndex.module.scss"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo/Seo";
import { IconContext } from "react-icons";
import {FaTools, FaEnvelope,  FaHtml5, FaCss3, FaBootstrap, FaMdb, FaSass, FaReact, FaLaptopCode } from "react-icons/fa";
import {SiGatsby, SiGraphql, SiJavascript} from "react-icons/si";
import {MdComputer} from "react-icons/md"
import {useInView} from "react-intersection-observer"
import ClientCard from "../components/client-card/ClientCard"


export default function Home() {

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

  // const { ref: heroText, inView} = useInView({triggerOnce: true});

  const { ref: project, inView: isProject} = useInView({triggerOnce: true});
  const { ref: client, inView: isClient} = useInView({triggerOnce: true});
  
  return(
    <Layout>
      <Seo title="Home" metaDescription={description} keywords={"developer,frontend,portfolio,javascript,gatsby,react,html,css"}/>
      {/* ///////// LANDING/INTRO SECTION ////////////// */}
      <section className={styles.introSection}>
        <div className={`${styles.introTitle} animate__animated animate__fadeInLeft`}>
        <h1>Hello, I'm Ibrahim.</h1>
        <h2>I build web apps!</h2>
        
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
        <IconContext.Provider value={{className: "grid-icons", size: "4em"}}>
        <div  className={styles.toolsGrid}>
          <div className={styles.gridItem}>
            <FaHtml5 color="#e34c26" title="HTML 5" />
            <p>HTML5</p>
          </div>
          <div className={styles.gridItem}>
            <FaCss3 color="#264de4" title="CSS 3" />
            <p>CSS3</p>
          </div>
          <div className={styles.gridItem}>
            <FaBootstrap color="#59287a" title="Bootstrap" />
            <p>Bootstrap 5</p>
          </div>
          <div className={styles.gridItem}>
            <FaSass color="#cc6699" title="Sass" />
            <p>Sass</p>
          </div>
          <div className={styles.gridItem}>
            <SiJavascript color="#f7df1e" style={{backgroundColor: "black"}} title="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className={styles.gridItem}>
            <FaReact color="#61dafb" title="React" />
            <p>React</p>  
          </div>
          <div className={styles.gridItem}>
            <SiGatsby color="#663399" title="Gatsby" />
            <p>Gatsby</p>
          </div>
          <div className={styles.gridItem}>
            <SiGraphql color="#e10098" title="GraphQL" />
            <p>GraphQL</p>
          </div>
        </div>
        </IconContext.Provider>
        
        </div>
      </section>
      {/* /////////////// CLIENTT SITES //////////////// */}
      <section ref={client}>
        <div className={styles.clientSection}>
          <div className={styles.clientTitleContainer}>
            <div className={styles.sectionTitle} style={{backgroundColor: "#B3C9C9"}}>
              <h1>Live Client Sites</h1>
              <MdComputer className={styles.sectionTitleIcon} color="black" />
            </div>
          </div>
          <div className={`${styles.sectionContentContainer} ${styles.projectsCardsContainer}`} style={{backgroundColor: "#B3C9C9", paddingTop: '5rem'}}>
          {isClient? <ClientCard animation="animate__animated animate__fadeInUp animate__slow" /> : <ClientCard animation="" />}
        </div>
        </div>
      </section>
      {/* /////////////// PROJECTS SECTION ////////////// */}
      <section className={styles.projectsSection} ref={project} >
        <div  className={styles.sectionTitle}>
          <h1>Things I built</h1>
          <FaLaptopCode className={styles.sectionTitleIcon} />
        </div>
        <div className={`${styles.sectionContentContainer} ${styles.projectsCardsContainer}`}>
          {isProject? <Card animation="animate__animated animate__fadeInUp animate__slow" /> : <Card animation="" />}
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
        <ContactForm />
        </div>
      </section>
    </Layout>
  )
  
}
