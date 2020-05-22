import React from "react"
import ReactSVG from 'react-svg';
import { graphql } from 'gatsby';

import SEO from "../components/seo"
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
        <SEO title={'Home'} />
        {/* {/* <img src={wavy} className="wave-container wave-top" alt="Topographical lines" /> */}
        <div className="content-body home">
          <div className="subsections">
            <div id="about" className="subsection about">
              <h1><span data-text="Juliette Abeyta">Juliette Abeyta</span></h1>
              <About />
            </div>
            <div id="work" className="subsection work">
              <h2><span data-text="Things I've Made">Things I've Made</span></h2>
              <Work />
            </div>
            <div id="blog" className="subsection blog">
              <h2><span data-text="Things I've Written">Things I've Written</span></h2>
              <Blog posts={posts} inBody />
            </div>
            <div id="contact" className="subsection contact">
              <h2><span data-text="Get In Touch">Get In Touch</span></h2>
              <Contact />
            </div>
          </div>
        </div>
        {/* {/* <img src={wavy} className="wave-container wave-bottom" alt="Topographical lines" /> */}
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
