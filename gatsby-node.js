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