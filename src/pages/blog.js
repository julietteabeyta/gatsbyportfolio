import React from "react"
import { Link } from "gatsby"
import get from "lodash/get"

import Layout from "../components/layout"
import SEO from "../components/seo"
import jsaIcon from "../images/jsaBlackLogo.png"

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogPosts: [],
    }
  }
  componentDidMount() {
    const { posts } = this.props
    if (posts) {
      this.setState({ blogPosts: posts })
    }
  }
  componentDidUpdate(prevProps) {
    const { posts } = this.props
    if (posts && posts.length && posts !== prevProps.posts) {
      this.setState({ blogPosts: posts })
    }
  }
  fetchBlogPosts() {
    const blogPosts = get(this, "props.data.allContentfulBlogPost.edges")
    this.setState({ blogPosts })
  }
  render() {
    const { inBody } = this.props
    const { blogPosts } = this.state
    if (!blogPosts || !blogPosts.length) {
      this.fetchBlogPosts()
    }
    let blogpostlinks = []
    let previewlinks = []
    blogPosts.forEach((post, index) => {
      const { node } = post
      const { publishDate } = node
      const date = new Date(publishDate)
      const month =
        (date.getUTCMonth() + 1).toString().length === 1
          ? "0" + (date.getUTCMonth() + 1).toString()
          : (date.getUTCMonth() + 1).toString()
      const year = date
        .getUTCFullYear()
        .toString()
        .substr(-2)
      blogpostlinks.push(
        <React.Fragment key={index}>
          <h3>
            <Link to={`/blog/${node.slug}`} className="blog-entry">
              {node.title}
            </Link>
          </h3>
          <p className="blog-date">
            {month}.{year}
          </p>
          <p className="blog-description">{node.description.description}</p>
        </React.Fragment>
      )
    })

    previewlinks = [blogpostlinks[0], blogpostlinks[1], blogpostlinks[2]]
    return (
      <>
        {!inBody ? (
          <>
            <Layout className="blog-home">
              <SEO title="Blog" />
              <div className="content-body">
                {!inBody && <h1>TIL: The Blog</h1>}
                <div className="blog-entries">{blogpostlinks}</div>
              </div>
            </Layout>
          </>
        ) : (
          <div className="blog-entries">{previewlinks}</div>
        )}
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
          publishDate
        }
      }
    }
  }
`
