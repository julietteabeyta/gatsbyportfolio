import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ location }) => {

  const post = location.state.post;
  const imageobj = location.state.image;
  let img = [];
  if (imageobj && imageobj.fixed && imageobj.fixed.src && imageobj.description) {
    img.push(<img src={imageobj.fixed.src} alt={imageobj.description} className="blog-image" />)
  }
  return (<Layout>
    <SEO title={location.state.description} />
    <h1>{location.state.title}</h1>
    {img}
    <div className="section" dangerouslySetInnerHTML={{ __html: `${post}` }}>
    </div>
  </Layout >)
}
export default BlogPost
