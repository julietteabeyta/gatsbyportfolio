import React from "react"
import SEO from "./seo"
import { graphql } from 'gatsby';

const BlogPost = props => {
  const post = props.data.contentfulBlogPost
  const title = post.title

  return (
    <div className="blog">
      <SEO title={title} />
      <div
        className="content-body"
        dangerouslySetInnerHTML={{
          __html: `<h1><span data-text="${title}">${title}</span></h1 > <div>${post.body.childMarkdownRemark.html}</div>`,
        }}
      ></div>
    </div>
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
