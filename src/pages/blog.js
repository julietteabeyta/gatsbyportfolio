import React from "react"
import { Link } from "gatsby"
import { BrowserRouter as Router, Route } from "react-router-dom"
import get from 'lodash/get'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPost from "./blogpost"
import blogheader from "../images/blogheader.jpg"

class Blog extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    let blogpostlinks = [];
    posts.forEach((post, index) => {
      blogpostlinks.push(<div key={index}><Link to={`/${post.node.slug}`} state={{ post: post.node.body.childMarkdownRemark.html, description: post.node.description.description, title: post.node.title, image: post.node.heroImage }}>{post.node.title}</Link></div>)
    });

    return (
      <>
        <Router>
          <Layout>
            <SEO title="Blog" />
            <img src={blogheader} alt="Green plant with a dark background" className="blog-header" />
            <h1>Get To Know A Little</h1>
            <p>Hello & welcome to my mini blog series!
            Each week I will relay the information I have obtained
            on various topics. This is an attempt at furthering my
            understanding of familiar, yet wholly unknown concepts,
            theories, technologies, phenomena, and things of the like.
            </p>
            {blogpostlinks}
          </Layout>
          <Route path="/blog/:id" component={BlogPost} />
        </Router>
      </>
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
        }
      }
    }
  }
  `