import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import { getSrc } from "gatsby-plugin-image"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Book from "../assets/icons/Book"
import AllCards from "../components/cards/AllCards"
import TagsList from "../components/TagsList"
import { getSlugFromUrl } from "../helpers"

const BlogTemplate = ({ data }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(null);
  // code block highlighter
  deckDeckGoHighlightElement();

  const relatedBlogs = data?.relatedBlogs?.nodes;
  // remove displayed blog from related blogs
  const removeSameBlog = (blogs, slug) => {
    const filteredBlogs = blogs.filter( blog => 
      blog.markdown.childMarkdownRemark.frontmatter.slug !== slug
    )
    return filteredBlogs
  }


  const blog = data.contentfulBlog;
  // for SEO
  const title = blog.markdown.childMarkdownRemark.frontmatter.title;
  const description = blog.markdown.childMarkdownRemark.excerpt;
  const ogImage = getSrc(blog.featuredImage);

  useEffect(() => {
    const links = document.querySelectorAll(".blog-template a");
      links.forEach(link => {
        if (link.hostname != window.location.hostname) {
          link.setAttribute("rel", "nofollow");
          link.setAttribute("target", "_blank");
        }
      })

    const slug = getSlugFromUrl(window.location.pathname);
    setFilteredBlogs(removeSameBlog(relatedBlogs, slug));

  }, []);


  return (
    <Layout>
      <Seo 
      title={title} 
      description={description}
      ogType={"article"}
      ogImage={ogImage}
      // ogUrl={`blogs/${slug}`}
      />
      <article className="blog-template">
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
          <section className="prose lg:prose-xl max-w-none mx-auto prose-h2:text-blue-accent prose-code:whitespace-nowrap prose-a:decoration-blue-accent">
            <div dangerouslySetInnerHTML={{__html: blog.markdown.childMarkdownRemark.html}} />
          </section>
          <section className="prose lg:prose-xl max-w-none mx-auto mt-20">
            <h2 className="text-pink-500 !mb-5">Thank you for reading. Let's connect!</h2>
            <p>Feel free to connect on{" "}
              <a href='https://twitter.com/ibrahimaq30' className="text-pink-500">Twitter</a> 
              {" "}or{" "} 
              <a href="https://www.linkedin.com/in/ibrahimaq/" className="text-pink-500">LinkedIn</a></p>
          </section>
        </div>
      </article>
      {filteredBlogs && 
        <section className="bg-greylightBg">
          <div className="content-container">
            <h2 className="mb-5">Related {filteredBlogs.length > 1 ? 'blogs' : 'blog'}</h2>
              <AllCards data={filteredBlogs} />
          </div>
        </section>
      }
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
