import React, { useEffect } from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'
import Button from "../Buttons/Button";
import AllCards from "../cards/AllCards";
import SectionTitle from "../SectionTitle";
import Container from "../Container";


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


  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Recent blogs" />
        {/* <h2 className="mb-10">Recent Blogs</h2> */}
        <div className="mt-[30px]">
          {allBlogs &&
            <AllCards data={allBlogs.slice(0, 3)} />
          }
        </div>
        <Button link="/blogs" label="View all blogs" className="mt-12 block !w-full py-4 md:!w-[350px] sm:mx-auto" />
   
      </Container>
    </section>
  );
}

export default RecentBlogs;