import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"

import AllCards from "../components/cards/AllCards"
import SearchBlogs from "../components/SearchBlogs"


const Blogs = (query) => {
  const data = query?.data?.allContentfulBlog?.nodes;

  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState(data);



  useEffect(() => {
    const searchBlogs = () => {
        const searchResult = data.filter(blog => 
        blog.markdown.childMarkdownRemark.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      return searchResult
    }
    if (searchTerm.length > 2) {
      setBlogs(searchBlogs())
    } else {
      setBlogs(data);
    }
  
}, [searchTerm])

  

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
          <div className="content-container min-h-screen">
            <SearchBlogs setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            {blogs.length > 0 ? 
              <AllCards data={blogs} /> 
              :
              <p className="text-center mt-10">No blogs found :(</p>
            }
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
      id
      date(formatString: "Do MMM YYYY")
      featuredImage {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
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
