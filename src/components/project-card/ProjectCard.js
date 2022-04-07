import React from "react"
import * as styles from "./styles.module.scss"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ProjectCard = ({animation}) => {
    const data = useStaticQuery(graphql`
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
    
    `)
    
     
      const cards = data.allMarkdownRemark.nodes;

      
    return ( 
        <>
            {cards && cards.map((card, i) => (
              <article  className={`${styles.card} ${animation}`} key={card.id}>
                <div className={styles.cardImgContainer}>
                <GatsbyImage 
                image={card.frontmatter.featuredImage.childImageSharp.gatsbyImageData} 
                alt={card.frontmatter.title}
                className={styles.cardImg}
                />
              
              </div>
              <div className={styles.cardContent}>
                <h2>{card.frontmatter.title}</h2>
                <p>{card.frontmatter.description}</p>
                <p className={styles.cardContentTechUsed}><strong>Tools: </strong>{card.frontmatter.stack}</p>
                <div className={styles.cardContentButtons}>
                  <a href={`https://ibrahimaq.github.io/${card.frontmatter.slug}` } target="_blank" rel="noreferrer">View live</a>
                  <a href={`https://github.com/ibrahimaq/${card.frontmatter.slug}`} target="_blank" rel="noreferrer">&lt; View code /&gt;</a>
                </div>
              </div>
              </article>
            ))}
            </>
     
     );
}

export default ProjectCard;


