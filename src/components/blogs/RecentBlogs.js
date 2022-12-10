import React, { useEffect } from "react";
import {graphql, Link, useStaticQuery} from 'gatsby'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../Button";
import RecentCards from "../cards/RecentCards";


const RecentBlogs = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulBlog(sort: {date: DESC}, limit: 3) {
        nodes {
          markdown {
            childMarkdownRemark {
              html
              frontmatter {
                title
                slug
                tags
              }
              timeToRead
              excerpt(format: PLAIN)
            }
          }
          featuredImage {
            gatsbyImageData(cropFocus: CENTER, layout: CONSTRAINED, placeholder: BLURRED)
          }
          id
        }
      }
    }
    `)

    console.log(data)

    const allBlogs = data?.allContentfulBlog?.nodes;

    deckDeckGoHighlightElement();

    return ( 
        <section className="bg-greylightBg py-20">
          <div className="content-container">
            <h2 className="mb-10">Recent Blogs</h2>
            {allBlogs && 
              <RecentCards data={allBlogs} />
            }
            <Button link="/blogs" label="View all blogs" className="mt-12 block !w-full py-4 md:!w-[350px] sm:!mx-auto" />
          </div>
        </section>
     );
}
 
export default RecentBlogs;