import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "./404"

const BlogPost = ({ location }) => {
  if (!location.state || !location.state.post) {
    return <NotFound />
  }

  const post = location.state.post
  const title = location.state.title

  return (
    <>
      <div className="header">
        <div className="nav">
          <a onClick={() => window.history.back()} className="back-button">
            Back
          </a>
        </div>
      </div>
      <Layout>
        <div className="blog">
          <SEO title={location.state.description} />
          <div
            className="content-body"
            dangerouslySetInnerHTML={{ __html: `<h1>${title}</h1><hr>${post}` }}
          ></div>
        </div>
      </Layout>
    </>
  )
}
export default BlogPost
