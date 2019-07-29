import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ location, post }) => {
  console.log('this is your locartion and your post ', location, post);
  return (<Layout>
    <SEO title="About" />
    <div className="about section">
      {location.state.post.body}
    </div>
  </Layout>)
}
export default BlogPost
