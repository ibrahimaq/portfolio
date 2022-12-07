import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { getImage, GatsbyImage, getSrc } from "gatsby-plugin-image"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

const BlogTemplate = ({ data }) => {
  // code block highlighter
  deckDeckGoHighlightElement();
  // console.log(data)

  const {title, body, slug, image, date, seoMetaDescriptionFirstPara} = data.contentfulBlogPost;
 
 

  // hero image -- getImage is helper function
  const heroImage = getImage(image);
  const heroImageSrc = getSrc(heroImage); // for SEO
  // embeded images in body
  


  //options argument to be passed in renderRichText
  //converting rich text to html format
  const options = {

    // FOR EMBEDDED ASSETS AND ENTRIES
    

    renderMark: {
      [MARKS.BOLD]: text => <b>{text}</b>,
      [MARKS.ITALIC]: text => <i>{text}</i>,
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
      [MARKS.CODE]: text => {
        // console.log(text);
        return <code>{text}</code>
      },
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
          
        >
          {children}
        </a>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h2>{children}</h2>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6>{children}</h6>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol>{children}</ol>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul>{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li>{children}</li>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
       
       
        if (
          node.content.length === 1 &&
          node.content[0].marks.find((x) => x.type === "code")
        ) {
          return <pre style={{lineHeight: ".9rem"}}>{children}</pre>;
        }
        return <p>{children}</p>
      },
      [BLOCKS.QUOTE]: children => (
        <blockquote>
          <>"{children.content[0].content[0].value}"</>
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr />,
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
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        // console.log(node);
        const markdownCodeBlock = node.data.target.codeBlock.childrenMarkdownRemark[0].html
        return (

            <div className='markdown-code-block' dangerouslySetInnerHTML={{__html: markdownCodeBlock}} />
          // <>
          
          //   <h2>Embedded Entry</h2>
          //   <pre>
          //     <code>{JSON.stringify(node, null, 2)}</code>
          //   </pre>
          // </>
        )
      },

      // extracting images from raw body via references in query
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node)
        const { gatsbyImageData, title } = node.data.target
      if (!gatsbyImageData) {
        // asset is not an image
        return null
      }
      const embeddedImage = getImage(gatsbyImageData);
      return <GatsbyImage image={embeddedImage} alt={title} />}
    },
  }

  // renders html format. Arg1 = parent of raw rich text node
  const renderOutput = renderRichText(body, options)

  return (
    <Layout>
      <Seo 
      title={title} 
      description={seoMetaDescriptionFirstPara.seoMetaDescriptionFirstPara}
      ogType={"article"}
      // ogUrl={`blogs/${slug}`}
      ogImage={heroImageSrc}
      />
      <div>
        <header>
          <h1>{title}</h1>
          <p>{date}</p>
          <GatsbyImage image={heroImage} alt={image.title} />
        </header>

      {body &&
       <article className='prose'>{renderOutput}
       </article>}
      <div>
        <span></span><span></span><span></span>
      </div>
      <p style={{marginTop: "2rem"}}>Did you like this article? Let me know by contacting me <Link to="/contact" title="contact page">here</Link> or following me on <a href="https://github.com/ibrahimaq" title="Github account">Github</a> or <a href="https://www.linkedin.com/in/ibrahimaq/" title="Linkedin account">LinkedIn</a>.</p>
      </div>
    </Layout>
  )
}

// export const query = graphql`
// query ($slug: String!) {
//   contentfulBlogPost(slug: {eq: $slug}) {
//     date(formatString: "Do MMMM YYYY")
//     seoMetaDescriptionFirstPara {
//       seoMetaDescriptionFirstPara
//     }
//     image {
//       gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
//       title
//     }
//     body {
//       raw
//     }
//     title
//     id
//   }
// }
// `

export default BlogTemplate

export const query = graphql`
query ($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    date(formatString: "Do MMMM YYYY")
    seoMetaDescriptionFirstPara {
      seoMetaDescriptionFirstPara
    }
    image {
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      title
    }
    body {
      raw
      references {
        ... on Node{
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            title
            id
          }
          ... on ContentfulCodeBlock {
            contentful_id
            __typename
            codeBlock {
              codeBlock
              id
              childrenMarkdownRemark {
                html
              }
            }
          }
        }  
      }
    }
    title
    id
    slug
  }
}
`

// references {
//   ... on ContentfulCodeBlock {
//     __typename
//     codeBlock {
//       codeBlock
//       id
//       childrenMarkdownRemark {
//         html
//       }
//     }
//     contentful_id
    
//   }
//   ... on ContentfulAsset {
//     contentful_id
//     __typename
//     gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
//     title
//     id
//   }
// }