import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/Layout"
import { GatsbyImage} from "gatsby-plugin-image"
import Seo from "../components/Seo/Seo"
import Card from "../components/cards/Card"
import AllCards from "../components/cards/AllCards"


const Blogs = (query) => {

  console.log(query)
  const data = query?.data?.allContentfulBlog?.nodes;

  return (
    <Layout>
      <Seo
        title="Blogs | Ibrahim Al-Quraishi"
        description={"Welcome to my blogs section! Here you'll find all technical and non-technical blogs about my journey into web development."}
        ogType={"Blogs"} ogUrl={undefined} ogImage={undefined}      // ogUrl={"/blogs"}
      />

      <section className="bg-greyBg">
          <div className="content-container">
            <h1>Blogs</h1>
          </div>
      </section>
      
      <section className="bg-greylightBg">
          <div className="content-container">
            <AllCards data={data} />
          </div>
      </section>
    </Layout>
  )
}

export default Blogs

export const query = graphql`
{
  allContentfulBlog(sort: {date: DESC}) {
    nodes {
      featuredImage {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        id
      }
      markdown {
        childMarkdownRemark {
          timeToRead
          frontmatter {
            title
            tags
            slug
          }
        }
      }
    }
  }
}
`
