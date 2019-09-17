import React from "react"
import { Link } from "gatsby"
import get from "lodash/get"
import "../styles/blog.scss"

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
    blogPosts.forEach((post, index) => {
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
        {!inBody ? (
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
                {!inBody && <h1>TIL: The Blog</h1>}
                <div className="blog-entries">{blogpostlinks}</div>
              </div>
            </Layout>
          </>
        ) : (
          <div className="blog-entries">{blogpostlinks}</div>
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
          createdAt
        }
      }
    }
  }
`
