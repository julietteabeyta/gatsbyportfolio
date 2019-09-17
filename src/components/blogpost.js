import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import NotFound from "../pages/404"

const BlogPost = props => {
  const post = props.data.contentfulBlogPost
  const title = post.title
  const description = post.description

  return (
    <>
      <div className="header">
        <div className="nav">
          <a onClick={() => window.history.back()} className="back-button">
            Back
          </a>
        </div>
      </div>
      <Layout>
        <div className="blog">
          <SEO title={description} />
          <div
            className="content-body"
            dangerouslySetInnerHTML={{
              __html: `<h1>${title}</h1><hr>${post.body.childMarkdownRemark.html}`,
            }}
          ></div>
        </div>
      </Layout>
    </>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
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
`
