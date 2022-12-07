import React from "react";
import {graphql, useStaticQuery} from 'gatsby'

const RecentBlogs = () => {
    const data = useStaticQuery(graphql`
    {
        allContentfulNewBlog {
          nodes {
            childContentfulNewBlogMarkdownTextNode {
                childMarkdownRemark {
                  html
                }
              }
        }
      }
    }
    `)

    console.log(data)
    

    return ( 
        <section className="">
            <div className="prose" dangerouslySetInnerHTML={{__html: data.allContentfulNewBlog.nodes[1].childContentfulNewBlogMarkdownTextNode.childMarkdownRemark.html}} />
         
        </section>
     );
}
 
export default RecentBlogs;