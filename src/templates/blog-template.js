import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import { getSrc } from "gatsby-plugin-image"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Book from "../assets/icons/Book"
import AllCards from "../components/cards/AllCards"
import TagsList from "../components/TagsList"


const BlogTemplate = ({ data }) => {
  // code block highlighter
  deckDeckGoHighlightElement();

  const relatedBlogs = data?.relatedBlogs?.nodes;

  const blog = data.contentfulBlog;

  // for SEO
  const title = blog.markdown.childMarkdownRemark.frontmatter.title;
  const description = blog.markdown.childMarkdownRemark.excerpt;
  const ogImage = getSrc(blog.featuredImage);


  return (
    <Layout>
      <Seo 
      title={title} 
      description={description}
      ogType={"article"}
      ogImage={ogImage}
      // ogUrl={`blogs/${slug}`}
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
            <TagsList tags={blog.markdown.childMarkdownRemark.frontmatter.tags} />
            {/* <GatsbyImage 
              image={blog.featuredImage.gatsbyImageData} 
              alt={blog.featuredImage.title}  
            /> */}
          </div>
        </header>
        <div className="content-container">
          <section className="prose lg:prose-xl max-w-none mx-auto prose-h2:text-font-greydark prose-code:whitespace-nowrap">
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

            {relatedBlogs.length > 1 && <AllCards data={relatedBlogs} />
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
    limit: 3,
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
