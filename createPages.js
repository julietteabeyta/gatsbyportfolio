const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postPrefix = `blog`
  const postTemplate = path.resolve(`./src/components/blogpost.js`)

  return graphql(`
    query BlogIndexQuery {
      allContentfulBlogPost(
        sort: { fields: [publishDate], order: DESC }
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const { edges } = result.data.allContentfulBlogPost

    edges.forEach(edge => {
      createPage({
        path: `${postPrefix}/${edge.node.slug}`,
        component: postTemplate,
        context: {
          id: edge.node.id,
        },
      })
    })
    // ==== END POSTS ====
    return null
  })
}
