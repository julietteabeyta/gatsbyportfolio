import React from "react"

import SEO from "../components/seo"

const BlogPost = ({ location }) => {

  const post = location.state.post;
  const imageobj = location.state.image;
  let img = [];
  if (imageobj && imageobj.fixed && imageobj.fixed.src && imageobj.description) {
    img.push(<img src={imageobj.fixed.src} alt={imageobj.description} className="blog-image" />)
  }
  return (
    <>
      <SEO title={location.state.description} />
      <div>
        <h1>{location.state.title}</h1>
        {img}
      </div>
      <div className="blog" dangerouslySetInnerHTML={{ __html: `${post}` }}>
      </div>
    </>)
}
export default BlogPost
