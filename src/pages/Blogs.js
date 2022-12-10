import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/Layout"
import { GatsbyImage} from "gatsby-plugin-image"
import Seo from "../components/Seo/Seo"


const Index = ({ data }) => {

  const blogs = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Seo
      title="Blogs | Ibrahim Al-Quraishi"
      description={"Welcome to my blogs section! Here you'll find all technical and non-technical blogs about my journey into web development."} 
      ogType={"Blogs"}
      // ogUrl={"/blogs"}
      
      
      />
     <section>
      <h1></h1>
     </section>

    </Layout>
  )
}

export default Index

export const query = graphql`query BlogsPage {
  allContentfulBlogPost(sort: {date: DESC}) {
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
}`
