// const getNonDuplicateTags = (data) => {
//     let uniqueTags = [];
//     data.allContentfulBlog.nodes.forEach(node => {
//         node.markdown.childMarkdownRemark.frontmatter.tags.forEach(tag => {
//           if (tags.includes(tag)) {
//             return
//           } else {
//             tags.push(tag);
//           }
//         })
//       })

//     return uniqueTags

// }

export const getSlugFromUrl = (path: string) => {
  //returns last part of url where the slug is the tag
  const indexOfLastSlash = path.lastIndexOf("/")
  const tagSlug = path.slice(indexOfLastSlash + 1)
  return tagSlug
}
