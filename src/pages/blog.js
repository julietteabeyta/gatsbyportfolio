import React from "react"
import { Link } from "gatsby"
import get from 'lodash/get'

import "../styles/blog.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import jsaIcon from "../images/jsaBlackLogo.png"

class Blog extends React.Component {

  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    let blogpostlinks = [];
    posts.forEach((post, index) => {
      blogpostlinks.push(
        <>
          <Link
            key={index}
            to={`/blog/${post.node.slug}`}
            state={{ post: post.node.body.childMarkdownRemark.html, description: post.node.description.description, title: post.node.title, image: post.node.heroImage }}
            className="blog-entry"
            id={`entry-${index}`}
          >
            {post.node.title}
          </Link>
          <p>{post.node.description.description}</p>
        </>
      );
    });

    return (
      <Layout className="blog-home">
        <SEO title="Blog" />
        <div className="header">
          <div className="nav">
            <Link to="/"><img src={jsaIcon} alt="Juliette Icon" /></Link>
          </div>
        </div>
        <div className="content-body">
          <h1>Hello!</h1>
          <p>Each week I will relay the information I have obtained on various
            topics. This is an attempt at furthering my understanding of familiar,
            yet wholly unknown concepts, theories, technologies, phenomena, and
            things of the like. In many cases, I am seeking to learn something
            specific about a higher-level topic. I am not an expert on these
            subjects, but I will do my best to let you know what it is I sought
            to learn and what I gained in my research.
            </p>
          <div className="blog-entries">
            {blogpostlinks}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
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
  `