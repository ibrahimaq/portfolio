import React, { useEffect } from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Button from "../Buttons/Button";
import RecentCards from "../cards/AllCards";
import SectionTitle from "../SectionTitle";


const RecentBlogs = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlog(sort: {date: DESC}, limit: 3) {
        nodes {
          id
          date(formatString: "Do MMM YYYY")
          markdown {
            childMarkdownRemark {
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
        }
      }
    }
    `)


  const allBlogs = data.allContentfulBlog.nodes

  deckDeckGoHighlightElement();

  return (
    <section className="bg-greylightBg">
      <div className="content-container">
        <SectionTitle title="Recent blogs" />
        {/* <h2 className="mb-10">Recent Blogs</h2> */}
        <div className="mt-[30px]">
          {allBlogs &&
            <RecentCards data={allBlogs.slice(0, 3)} />
          }
        </div>
        <Button link="/blogs" label="View all blogs" className="mt-12 block !w-full py-4 md:!w-[350px] sm:mx-auto" />
      </div>
    </section>
  );
}

export default RecentBlogs;