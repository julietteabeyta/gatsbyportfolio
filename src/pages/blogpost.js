import React from "react"
import { Link } from "gatsby";
import SEO from "../components/seo"


const BlogPost = ({ location }) => {

  const post = location.state.post;
  const imageobj = location.state.image;
  const title = location.state.title;
  let img = [];
  if (imageobj && imageobj.fixed && imageobj.fixed.src && imageobj.description) {
    img.push(<img src={imageobj.fixed.src} alt={imageobj.description} className="blog-post blog-image" />)
  }
  return (
    <div className="blog">
      <SEO title={location.state.description} />
      <div className="blog-header">
        <div className="blog-nav">
          <Link to="/blog">Back</Link>
        </div>
        {img}
      </div>
      <div className="blog-body" dangerouslySetInnerHTML={{ __html: `<h1>${title}</h1><hr>${post}` }}>
      </div>
    </div>)
}
export default BlogPost
