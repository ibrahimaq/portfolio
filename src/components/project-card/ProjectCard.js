import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss"
import { useStaticQuery, graphql } from "gatsby";

const ProjectCard = ({query}) => {
    
    
        console.log(query);
    return ( 
        <article className={styles.card}>
            <p>hello</p>
            {/* <div className={styles.cardImgContainer}>
              <StaticImage src="../../images/random-quote-generator.png" 
              alt="meme generator app"
              layout="constrained"
              placeholder="BLURRED" 
              aspectRatio={16/9} 
              className={styles.cardImg} />
            </div>
            <div className={styles.cardContent}>
              <h2>Meme Generator</h2>
              <p>Make your own meme with over 100 templates to choose from.</p>
              <div className={styles.cardContentButtons}>
                <a href="https://ibrahimaq.github.io/meme-generator" className={styles.viewLive}>View live</a>
                <a href="https://github.com/ibrahimaq/meme-generator" className={styles.viewCode}>&lt; View code /&gt;</a>
              </div>
            </div> */}
          </article>
     );
}
 
export default ProjectCard;

export const card = graphql`
query MyQuery {
    allMarkdownRemark {
      nodes {
        id,
        frontmatter {
          description,
          slug,
          stack,
          title,
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
  
  
 
 `

