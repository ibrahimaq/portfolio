const getNonDuplicateTags = (data) => {
    let uniqueTags = [];
    data.allContentfulBlog.nodes.forEach(node => {
        node.markdown.childMarkdownRemark.frontmatter.tags.forEach(tag => {
          if (tags.includes(tag)) {
            return
          } else {
            tags.push(tag);
          }
        })
      })

    return uniqueTags
    
}

module.exports = { getNonDuplicateTags }