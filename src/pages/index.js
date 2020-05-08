import React from "react"
import ReactSVG from 'react-svg';
import { graphql } from 'gatsby';

import Contact from "../components/contact"
import About from "../components/about"
import Work from "../components/work"
import Blog from "../components/blog"
import wavy from '../images/wavy.svg';
import get from "lodash/get"

class IndexPage extends React.Component {
  render() {
    const posts = get(this, "props.data.allContentfulBlogPost.edges")
    return (
      <>
        <div>
          <ReactSVG src={wavy} className="svg-container svg-top" />
          <div className="content-body home">
            <div className="subsections">
              <div id="about" className="subsection about">
                <h1>Juliette Abeyta</h1>
                <About />
              </div>
              <div id="work" className="subsection work">
                <h2>Things I've Made</h2>
                <Work />
              </div>
              <div id="blog" className="subsection blog">
                <h2>Things I've Written</h2>
                <Blog posts={posts} inBody />
              </div>
              <div id="contact" className="subsection contact">
                <h2>Get In Touch</h2>
                <Contact />
              </div>
            </div>
          </div>
          <ReactSVG src={wavy} className="svg-container svg-bottom" />
        </div>
      </>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query BlogQuery {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
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
          publishDate
        }
      }
    }
  }
`
