const path = require("path");

exports.createPages = async ({graphql, actions}) =>{
    const {data} = await graphql(`
    query GetSlugsQuery {
        allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
      }
      
    `);
    //absolute path to template
    const templatePath = path.resolve("./src/templates/blog-template.js");
    //cycling through nodes to create pages
    data.allContentfulBlogPost.edges.forEach(edge => {
        actions.createPage({
            path: "/blogs/" + edge.node.slug,
            component: templatePath,
            context: {
                slug: edge.node.slug
            }
        })
    })
}

// exports.createSchemaCustomization = ({actions}) => {
//       // for creating types in graphQL schema. It helps to know if reference field is available or not.
//     // e.g. if an entry or asset is not in the richTextField then it would not throw an error.
//     const { createTypes } = actions
//     /*The union name is arbitrary. However, I'm using the name that would have been generated by the schema inferer.
//       union ContentfulAssetContentfulPageContentfulPostContentfulTagUnion = ContentfulAsset | ContentfulPage | ContentfulPost | ContentfulTag
//       ContentfulPostRichBody does not implement node
//     */
   
//     const typeDefs = `
//      type ContentfulPostRichBody {
//         references: [ContentfulCodeBlock] @link(by: "id", from: "references___NODE")
//     }
// `

// createTypes(typeDefs)
// }