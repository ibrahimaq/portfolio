import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./styles.module.scss"
const BlogTemplate = ({ data }) => {
  console.log(data)
  // const blogPost = data.contentfulBlogPost
  // console.log(blogPost)
  const {title, body, image, date} = data.contentfulBlogPost;
 
 

  // hero image -- getImage is helper function
  const heroImage = getImage(image);

  // embeded images in body


  //options argument to be passed in renderRichText
  //converting rich text to html format
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className={styles.fontBold}>{text}</b>,
      [MARKS.ITALIC]: text => <i className={styles.fontItalic}>{text}</i>,
      [MARKS.UNDERLINE]: text => <u className={styles.fontUnderline}>{text}</u>,
      [MARKS.CODE]: text => <code className={styles.fontCode}>{text}</code>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
          className={styles.inlineLink}
        >
          {children}
        </a>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h2 className={styles.h1}>{children}</h2>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className={styles.h2}>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className={styles.h3}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={styles.h4}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className={styles.h5}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className={styles.h6}>{children}</h6>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className={styles.orderedList}>{children}</ol>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={styles.unorderedList}>{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className={styles.listItem}>{children}</li>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node.content[0].value === "") {
          return <br />
        } else {
          return <p className={styles.p}>{children}</p>
        }
      },
      [BLOCKS.QUOTE]: children => (
        <blockquote className={styles.blockquote}>
          <>"{children.content[0].content[0].value}"</>
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className={styles.hr} />,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        )
      },

      // extracting images from raw body via references in query
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
      
        const { gatsbyImageData, title } = node.data.target
      if (!gatsbyImageData) {
        // asset is not an image
        return null
      }
      const embeddedImage = getImage(gatsbyImageData);
      return <GatsbyImage image={embeddedImage} alt={title} className={styles.embeddedImage} />}
    },
  }

  // renders html format. Arg1 = parent of raw rich text node
  const renderOutput = renderRichText(body, options)

  return (
    <Layout>
      <Seo title={title} metaDescription={title} />
      <div className={styles.container}>
      <header className={styles.header}>
      <h1>{title}</h1>
      <p>Published on {date}</p>
     
      
      
      <GatsbyImage image={heroImage} alt={image.title} className={styles.heroImage} />
   
      
      
      
        
      </header>
      {body && <article className={styles.blogBody}>{renderOutput}</article>}
      <div className={styles.sectionDivider}>
        <span></span><span></span><span></span>
      </div>
      <p style={{marginTop: "2rem"}}>Did you like this article? Let me know by contacting me <Link to="/contact" title="contact page">here</Link> or following me on <a href="https://github.com/ibrahimaq" title="Github account">Github</a> or <a href="https://www.linkedin.com/in/ibrahimaq/" title="Linkedin account">LinkedIn</a>.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "Do MMMM YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          title
          }
        }
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        title
      }
    }
  }
`

export default BlogTemplate

// export const query = graphql`
//   query ($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       date(formatString: "Do MMMM YYYY")
//       body {
//         raw
//       }
//     }
//   }
// `
