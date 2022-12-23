import { Link, graphql } from "gatsby"
import React, {useState} from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import { getImage, GatsbyImage, getSrc } from "gatsby-plugin-image"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Book from "../assets/icons/Book"
import RecentBlogs from "../components/blogs/RecentBlogs"
import {camelCase, startCase} from 'lodash';
import Card from "../components/cards/Card"
import AllCards from "../components/cards/AllCards"


const BlogTemplate = ({ data }) => {
  // code block highlighter
  deckDeckGoHighlightElement();

  const relatedBlogs = data?.relatedBlogs?.nodes;

  console.log(relatedBlogs)

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
            <ul className="flex flex-row">
              {blog.markdown.childMarkdownRemark.frontmatter.tags.map((tag, i) => (
                <li className="ml-5 py-1 px-2 text-indigo-500 bg-white rounded-lg">#{camelCase(tag)}</li>
              ))}
            </ul>
            {/* <GatsbyImage 
              image={blog.featuredImage.gatsbyImageData} 
              alt={blog.featuredImage.title}  
            /> */}
          </div>
        </header>
        <div className="content-container">
          <section className="prose lg:prose-lg max-w-none mx-auto prose-h2:text-font-greydark prose-code:whitespace-nowrap">
            <div dangerouslySetInnerHTML={{__html: blog.markdown.childMarkdownRemark.html}} />
          </section>
          <section className="prose prose-lg lg:prose-xl max-w-none mx-auto mt-20">
            <h2 className="text-pink-500 !mb-5">Thank you for reading. Let's connect!</h2>
            <p>Feel free to connect on{" "}
              <a href='https://twitter.com/ibrahimaq30' className="text-pink-500">Twitter</a> 
              {" "}or{" "} 
              <a href="https://www.linkedin.com/in/ibrahimaq/" className="text-pink-500">LinkedIn</a></p>
          </section>
        </div>
      </article>
      <section className="bg-greylightBg">
        <div className="content-container">
          <h2 className="mb-5">Related Blogs</h2>

            {relatedBlogs.length > 1 && <AllCards data={relatedBlogs.slice(0,3)} />
            }

        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
query ($slug: String!, $relatedBlogsByTags: [String!]!) {
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
  relatedBlogs: allContentfulBlog(
    filter: {childrenContentfulBlogMarkdownTextNode: {elemMatch: {childrenMarkdownRemark: {elemMatch: {frontmatter: {tags: {in: $relatedBlogsByTags}}}}}}}
  ) {
    nodes {
      id
      date(formatString: "Do MMM YYYY")
      title
      markdown {
        childMarkdownRemark {
          frontmatter {
            title
            slug
            tags
          }
          timeToRead
        }
      }
      featuredImage {
        gatsbyImageData(cropFocus: CENTER, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  } 
}
`
