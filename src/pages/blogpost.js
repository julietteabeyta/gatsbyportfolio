import React from "react"
import { Link } from "gatsby";
import SEO from "../components/seo"
import NotFound from "./404"


const BlogPost = ({ location }) => {

  if (!location.state || !location.state.post) {
    return (< NotFound />)
  }

  const post = location.state.post;
  const title = location.state.title;

  return (
    <div className="blog">
      <SEO title={location.state.description} />
      <div className="header">
        <div className="nav">
          <Link to="/blog"> <div className="back-button">Back</div> </Link>
        </div>
      </div>
      <div className="content-body" dangerouslySetInnerHTML={{ __html: `<h1>${title}</h1><hr>${post}` }}>
      </div>
    </div>)
}
export default BlogPost
