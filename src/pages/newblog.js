import React, { useEffect } from "react"
import Layout from "../components/layout/Layout"
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();


const Newblog = () => {

    const data = useStaticQuery(graphql`
    {
      contentfulNewBlog {
        markdown {
          childMarkdownRemark {
            html
          }
        }
      }
      allFile(filter: {sourceInstanceName: {eq: "client-cards"}, ext: {eq: ".md"}}) {
        nodes {
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
    `)

    console.log(data)
    return ( 
        <Layout>
            <div>hello</div>
            <div className="prose prose-invert md:prose-code:bg-red-500" dangerouslySetInnerHTML={{__html: data.contentfulNewBlog.markdown.childMarkdownRemark.html }} />
      
            <div className="" dangerouslySetInnerHTML={{__html: data.allFile.nodes[0].childMarkdownRemark.html}} />
        </Layout>
        
     );
}
 
export default Newblog;

