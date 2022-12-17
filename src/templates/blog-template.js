import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import { getImage, GatsbyImage, getSrc } from "gatsby-plugin-image"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Book from "../assets/icons/Book"


const BlogTemplate = ({ data }) => {
  // code block highlighter
  deckDeckGoHighlightElement();

 console.log(data)
 const blog = data.contentfulBlog;


  // const heroImage = getImage(image);
  // // image for SEO
  // const heroImageSrc = getSrc(heroImage);
  


  return (
    <Layout>
      <Seo 
      title={''} 
      description={''}
      ogType={"article"}
      // ogUrl={`blogs/${slug}`}
      // ogImage={heroImageSrc}
      />
      <article className="blog">
        <header className="bg-greyBg-dark">
          <div className="content-container flex flex-col items-center">
        
            <p>Published {blog.date}</p>
            <h1 className="text-center mt-5">{blog.markdown.childMarkdownRemark.frontmatter.title}</h1>
            
            <div className="flex items-center my-5 gap-2">
              <Book fill='#545456' width='20px' customClass='inline-block' />
             
              <p className="ml-2">{blog.markdown.childMarkdownRemark.timeToRead} mins read</p>
            </div>
            
            
          
            <GatsbyImage 
              image={blog.featuredImage.gatsbyImageData} 
              alt={blog.featuredImage.title} 
              className="w-40 block"  
            />
       
      
          </div>
        </header>
        <div className="content-container">
          <section className="prose mx-auto">
          <div dangerouslySetInnerHTML={{__html: blog.markdown.childMarkdownRemark.html}} />
          </section>
        </div>
      </article>

      <p style={{marginTop: "2rem"}}>Did you like this article? Let me know by contacting me <Link to="/contact" title="contact page">here</Link> or following me on <a href="https://github.com/ibrahimaq" title="Github account">Github</a> or <a href="https://www.linkedin.com/in/ibrahimaq/" title="Linkedin account">LinkedIn</a>.</p>
   
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
query ($slug: String!) {
  contentfulBlog(slug: {eq: $slug}) {
    id
    date(formatString: "Do MMM YYYY")
    featuredImage {
      title
      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, aspectRatio: 2, quality: 70)
    }
    markdown {
      childMarkdownRemark {
        html
        timeToRead
        excerpt
        frontmatter {
          tags
          title
        }
      }
    }
  }
}
`
