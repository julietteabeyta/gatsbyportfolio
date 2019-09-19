import React from "react"
import Layout from "./layout"
import SEO from "./seo"

const BlogPost = props => {
  const post = props.data.contentfulBlogPost
  const title = post.title

  return (
    <>
      <Layout>
        <div className="blog">
          <SEO title={title} />
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
