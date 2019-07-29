import React from "react"
import { Link } from "gatsby"
import { BrowserRouter as Router, Route } from "react-router-dom"
import get from 'lodash/get'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPost from "./blogpost"

class Blog extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    console.log('These are your posts ', posts);
    let blogpostlinks = [];
    posts.forEach((post, index) => {
      blogpostlinks.push(<Link to={`/${post.node.slug}`} state={{ post: post.node.body }} key={post.node.slug}>{post.node.description.description}</Link>)
    });
    return (
      <>
        <Router history>
          <Layout>
            <SEO title="Blog" />
            <p>This will be the project description</p>
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
          body
        }
        description {
          description
        }
        }
      }
    }
  }
  `