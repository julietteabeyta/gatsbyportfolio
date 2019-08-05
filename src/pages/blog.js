import React from "react"
import { Link } from "gatsby"
import get from 'lodash/get'

import "../styles/blog.css"

import SEO from "../components/seo"
import blogheader from "../images/blogheader.jpg"
import jsaIcon from "../images/jsa-icon.png"

class Blog extends React.Component {

  onMouseEnter(e) {
    const index = e.currentTarget.id.split('-')[1];
    const blogEntryImageID = `blog-entry-image-${index}`;
    let blogEntryImage = document.getElementById(blogEntryImageID);
    blogEntryImage.classList.add('blog-entry-image-zoom');
  }

  onMouseLeave(e) {
    const index = e.currentTarget.id.split('-')[1];
    const blogEntryImageID = `blog-entry-image-${index}`;
    let blogEntryImage = document.getElementById(blogEntryImageID);
    blogEntryImage.classList.remove('blog-entry-image-zoom');
  }

  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    let blogpostlinks = [];
    posts.forEach((post, index) => {
      blogpostlinks.push(
        <Link
          key={index}
          to={`/blog/${post.node.slug}`}
          state={{ post: post.node.body.childMarkdownRemark.html, description: post.node.description.description, title: post.node.title, image: post.node.heroImage }}
          className="blog-entry"
          id={`entry-${index}`}
          onMouseEnter={(e) => this.onMouseEnter(e)}
          onMouseLeave={(e) => this.onMouseLeave(e)}
        >
          <div className="blog-entry-image-container">
            <img src={post.node.heroImage.fixed.src} alt={post.node.heroImage.description} className="blog-entry-image" id={`blog-entry-image-${index}`} />
          </div>
          <div className="blog-entry-title"><b>{post.node.title}</b><p>{post.node.description.description}</p></div>
        </Link>);
    });

    return (
      <div className="blog">
        <SEO title="Blog" />
        <div className="blog-header">
          <div className="blog-nav">
            <Link to="/"><img src={jsaIcon} alt="Juliette Icon" /></Link>
          </div>
          <img src={blogheader} alt="Green plant with a dark background" className="blog-image" />
        </div>
        <div className="blog-body">
          <h1>Hello!</h1>
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
      </div>
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