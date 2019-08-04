import React from "react"
import { Link } from "gatsby"
import { BrowserRouter as Router, Route } from "react-router-dom"
import get from 'lodash/get'

import "../styles/blog.css"

import SEO from "../components/seo"
import BlogPost from "./blogpost"
import blogheader from "../images/blogheader.jpg"
import jsaIcon from "../images/jsa-icon.png"

class Blog extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    let blogpostlinks = [];
    console.log('these are your blog posts ', posts);
    posts.forEach((post, index) => {
      blogpostlinks.push(
        <Link
          key={index}
          to={`/${post.node.slug}`}
          state={{ post: post.node.body.childMarkdownRemark.html, description: post.node.description.description, title: post.node.title, image: post.node.heroImage }}
          className="blog-entry">
          <img src={post.node.heroImage.fixed.src} alt={post.node.heroImage.description} />
          <div className="blog-entry-title">{post.node.title}</div>
        </Link>);
    });

    return (
      <div className="blog">
        <Router>
          <SEO title="Blog" />
          <div className="blog-header">
            <div className="blog-nav">
              <Link to="/"><img src={jsaIcon} alt="Juliette Icon" /></Link>
            </div>
            <img src={blogheader} alt="Green plant with a dark background" className="blog-image" />
          </div>
          <div className="blog-body">
            <b>Hello!</b>
            <p>Welcome to my mini blog series!
            Each week I will relay the information I have obtained
            on various topics. This is an attempt at furthering my
            understanding of familiar, yet wholly unknown concepts,
            theories, technologies, phenomena, and things of the like.
            </p>
            <div className="blog-entries">
              {blogpostlinks}
            </div>
          </div>
          <Route path="/blog/:id" component={BlogPost} />
        </Router >
      </div>
    );
  }
}

export default Blog

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