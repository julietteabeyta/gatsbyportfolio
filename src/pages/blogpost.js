import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ location }) => {

  const post = location.state.post;
  return (<Layout>
    <SEO title={location.state.description} />
    <div className="about section" dangerouslySetInnerHTML={{ __html: `${post}` }}>
    </div>
  </Layout >)
}
export default BlogPost
