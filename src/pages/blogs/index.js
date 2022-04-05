import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo/Seo"
import * as styles from "./styles.module.scss"

const Index = ({ data }) => {
  console.log(data)

  const blogs = data.allContentfulBlogPost.edges
  console.log(blogs)

  return (
    <Layout>
      <Seo title="Blogs" />
      <div className={styles.container}>
      <header className={styles.header}>
        <h1>Blogs</h1>
        <p>Snippets, articles, learning journal and resources</p>
      </header>

      <section>
        <ol className={styles.blogsList}>
          {blogs &&
            blogs.map((blog, index) => (
              <li key={index} className={styles.listItem}>
                <Link to={`/blogs/${blog.node.slug}`} className={styles.link}>
                  
                    <GatsbyImage
                      image={blog.node.image.gatsbyImageData}
                      alt={blog.node.image.title}
                      className={styles.imageContainer}
                    />
                 
                  <div className={styles.blogTextContainer}>
                    <h3>{blog.node.title}</h3>
                    <p>{blog.node.date}</p>
                  </div>
                </Link>
              </li>
            ))}
        </ol>
      </section>
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query BlogsPage {
    allContentfulBlogPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          title
          slug
          date(formatString: "Do MMMM YYYY")
          id
          image {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED

              quality: 100
              aspectRatio: 2
            )
            title
          }
        }
      }
    }
  }
`
