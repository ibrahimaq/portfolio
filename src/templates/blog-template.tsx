import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import { getSrc } from "gatsby-plugin-image"
import Book from "../assets/icons/Book"
import AllCards from "../components/cards/AllCards"
import TagsList from "../components/TagsList"
import { getSlugFromUrl } from "../helpers"
import ThanksForReading from "../components/ThanksForReading"
import { useGlobalContext } from "../context/GlobalContext"
import { themeClassBuilder } from "../tools/theme"
import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import { getLiMarkerStyle } from "../tools/theme"

interface IBlogTemplate {
  data: Queries.singleBlogQuery
}

const BlogTemplate = ({ data }: IBlogTemplate) => {
  const [filteredBlogs, setFilteredBlogs] = useState<Queries.ContentfulBlog[] | null>(null);
  // code block highlighter

  const { color } = useGlobalContext();

  const relatedBlogs = data?.relatedBlogs?.nodes;
  // remove displayed blog from related blogs
  const removeSameBlog = (blogs: Queries.ContentfulBlog[], slug: string) => {
    const filteredBlogs = blogs.filter((blog: Queries.ContentfulBlog ) => 
      blog?.markdown?.childMarkdownRemark?.frontmatter?.slug !== slug
    )
    return filteredBlogs
  }


  const blog = data.contentfulBlog;
  // for SEO
  const title = blog?.markdown?.childMarkdownRemark?.frontmatter?.title;
  const description = blog?.markdown?.childMarkdownRemark?.excerpt;
  const ogImage = getSrc(blog?.featuredImage as any);

  useEffect(() => {
    const links = document.querySelectorAll(".blog-template a");
      links.forEach(link => {
        // @ts-ignore
        if (link.hostname !== window.location.hostname) {
          link.setAttribute("rel", "nofollow");
          link.setAttribute("target", "_blank");
        }
      })

    const slug = getSlugFromUrl(window.location.pathname);
    setFilteredBlogs(removeSameBlog(relatedBlogs as Queries.ContentfulBlog[], slug));

  }, []);

 


  return (
    <Layout>
      <Seo
        title={title ? title : ''}
        description={description? description : ''}
        ogType='article'
        ogImage={ogImage}
        // ogUrl={`blogs/${slug}`}
      />
      <article className="mt-20 pt-20">
        <Container>
          <header>
            <div className="flex flex-col items-center">
              <p>Published {blog?.date}</p>
              <h1 className="text-center mt-5">
                {blog?.markdown?.childMarkdownRemark?.frontmatter?.title}
              </h1>
              <div className="flex items-center my-5">
                <Book fill="#545456" width="20px" customClass="inline-block mr-2" />
                <p>{blog?.markdown?.childMarkdownRemark?.timeToRead} min read</p>
              </div>
              <TagsList
                tags={blog?.markdown?.childMarkdownRemark?.frontmatter?.tags as string[]}
              />
              {/* <GatsbyImage 
                image={blog.featuredImage.gatsbyImageData} 
                alt={blog.featuredImage.title}  
              /> */}
            </div>
          </header>
        

          <section 
          className={`blog-template pt-10 prose prose-lg lg:prose-xl mx-auto prose-headings:text-dark
          prose-code:font-medium prose-code:!text-base prose-code:whitespace-nowrap prose-blockquote:overflow-auto 
          prose-blockquote:border-l-${color}-600 prose-blockquote:bg-${color}-600 prose-blockquote:bg-opacity-5 prose-blockquote:font-light prose-a:decoration-accent-1
              prose-figcaption:text-center ${color? getLiMarkerStyle(color) : 'prose-li:marker:text-indigo-600'}
          `}>
            <div
              dangerouslySetInnerHTML={{
                __html: blog?.markdown?.childMarkdownRemark?.html as string,
              }}
            />
          </section>

        </Container>
      </article>


      <section className="max-w-[920px] mx-auto">
            <ThanksForReading />
      </section>


      {filteredBlogs && filteredBlogs.length > 0 ? (
        <section className="pt-20">
          <Container>
            {/* <h2 className="mb-5"> */}
            <div className="mb-5">
              <SectionTitle title={`Related ${filteredBlogs.length > 1 ? "blogs" : "blog"}`} />
            </div>
            <AllCards data={filteredBlogs} />
          </Container>
        </section>
      ) : null}

    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
query singleBlog ($slug: String!, $relatedBlogsByTags: [String!]!) {
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
