import React from "react"
import { Link } from "gatsby"
import get from "lodash/get"

import "../styles/blog.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import jsaIcon from "../images/jsaBlackLogo.png"

class Blog extends React.Component {
  render() {
    console.log("Hello we get to the blog page!!!")
    const posts = get(this, "props.data.allContentfulBlogPost.edges")
    let blogpostlinks = []
    if (!posts) {
      return ""
    }
    posts.forEach((post, index) => {
      blogpostlinks.push(
        <React.Fragment key={index}>
          <h3>
            <Link
              to={`/blog/${post.node.slug}`}
              state={{
                post: post.node.body.childMarkdownRemark.html,
                description: post.node.description.description,
                title: post.node.title,
                image: post.node.heroImage,
              }}
              className="blog-entry"
              id={`entry-${index}`}
            >
              {post.node.title}
            </Link>
          </h3>
          <p>{post.node.description.description}</p>
        </React.Fragment>
      )
    })

    return (
      <>
        <div className="header">
          <div className="nav">
            <Link id="home-nav" to="/">
              <img src={jsaIcon} alt="Juliette Icon" />
            </Link>
          </div>
        </div>
        <Layout className="blog-home">
          <SEO title="Blog" />
          <div className="content-body">
            <h1>Hello!</h1>
            <div className="blog-entries">{blogpostlinks}</div>
          </div>
        </Layout>
      </>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
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
`
