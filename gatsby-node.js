/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const slash = require(`slash`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const storeTemplate = path.resolve('src/pages/blogpost.js')
    resolve(
      graphql(`
        query BlogIndexQuery {
          allContentfulBlogPost(sort: {fields: [publishDate], order: DESC }, filter: {node_locale: {eq: "en-US"}}) {
          edges {
            node {
              title
              slug
              body {
                childMarkdownRemark {
                  html
                }
              }
              heroImage {
                description
                fixed(width: 1600) {
                  width
                  height
                  src
                  srcSet
                }
              }
              description {
                description
              }
              createdAt
            }
          }
        }
      }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlogPost.edges.forEach((edge) => {
          createPage({
            path: `/blog/${edge.node.slug}`,
            component: slash(storeTemplate),
            context: {
              slug: edge.node.slug,
              post: edge.node.body.childMarkdownRemark.html,
              description: edge.node.description.description,
              title: edge.node.title,
              image: edge.node.heroImage
            }
          })
        })
        return
      })
    )
  })
}
