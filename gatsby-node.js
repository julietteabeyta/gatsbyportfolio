/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const storeTemplate = path.resolve('src/pages/blogpost.js')
    resolve(
      graphql(`
        {
          allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, filter: {node_locale: {eq: "en-US"}}) {
          edges {
            node {
              title
              slug
              body {
                childMarkdownRemark {
                  html
                }
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
    }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlogPost.edges.forEach((edge) => {
          console.log('this is your edge ', edge);
          createPage({
            path: edge.node.slug,
            component: storeTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}
