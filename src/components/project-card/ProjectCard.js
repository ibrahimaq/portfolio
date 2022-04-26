import React from "react"
import * as styles from "./styles.module.scss"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

//animation is prop passed from main index.js to animate this component

const ProjectCard = ({animation}) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {sourceInstanceName: {eq: "project-cards"}, ext: {eq: ".md"}}) {
        nodes {
          id
          childMarkdownRemark {
            frontmatter {
              title
              stack
              slug
              description
              featuredImage {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
    
    
    `)
    
     
      const cards = data.allFile.nodes;
      
    return ( 
        <>
            {cards && cards.map((card, i) => (
              <article  className={`${styles.card} ${animation}`} key={card.id}>
                <div className={styles.cardImgContainer}>
                <GatsbyImage 
                image={card.childMarkdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData} 
                alt={card.childMarkdownRemark.frontmatter.title}
                className={styles.cardImg}
                />
              
              </div>
              <div className={styles.cardContent}>
                <h2>{card.childMarkdownRemark.frontmatter.title}</h2>
                <p>{card.childMarkdownRemark.frontmatter.description}</p>
                <p className={styles.cardContentTechUsed}><strong>Tools: </strong>{card.childMarkdownRemark.frontmatter.stack}</p>
                <div className={styles.cardContentButtons}>
                  <a href={`https://ibrahimaq.github.io/${card.childMarkdownRemark.frontmatter.slug}` } target="_blank" rel="noreferrer">View live</a>
                  <a href={`https://github.com/ibrahimaq/${card.childMarkdownRemark.frontmatter.slug}`} target="_blank" rel="noreferrer">&lt; View code /&gt;</a>
                </div>
              </div>
              </article>
            ))}
            </>
     
     );
}

export default ProjectCard;


