// const path = require("path");
import path from "path"
import _ from "lodash"
// const _ = require("lodash")

//@ts-ignore
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query GetSlugsQuery {
      allContentfulBlog {
        nodes {
          slug
          markdown {
            childMarkdownRemark {
              frontmatter {
                tags
              }
            }
          }
        }
      }
    }
  `)

  //absolute path to template
  const templatePath = path.resolve("./src/templates/blog-template.tsx")
  //cycling through nodes to create pages
  //@ts-ignore
  data.allContentfulBlog.nodes.forEach(node => {
    actions.createPage({
      path: "/blogs/" + node.slug,
      component: templatePath,
      context: {
        slug: node.slug,
        relatedBlogsByTags: node.markdown.childMarkdownRemark.frontmatter.tags,
      },
    })
  })

  // pages created by tags
  let uniqueTags: string[] = []
  const templateTagsPath = path.resolve("./src/templates/tags-template.tsx")

  //@ts-ignore
  data.allContentfulBlog.nodes.forEach(node => {
    node.markdown.childMarkdownRemark.frontmatter.tags.forEach(
      (tag: string) => {
        if (uniqueTags.includes(tag)) {
          return
        } else {
          uniqueTags.push(tag)
        }
      }
    )
  })
  uniqueTags.forEach(tag => {
    actions.createPage({
      path: "/tags/" + _.kebabCase(tag),
      component: templateTagsPath,
    })
  })
}
