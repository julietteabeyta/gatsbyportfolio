import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import jsaIcon from "../images/jsaBlackLogo.png"
import About from "./about"
import Work from "./work"
import Blog from "./blog"

const IndexPage = () => (
  <>
    <div className="header">
      <div className="nav">
        <Link id="home-nav" to="/">
          <img src={jsaIcon} alt="Juliette Icon" />
        </Link>
      </div>
    </div>
    <Layout>
      <SEO title="Home" />
      <div>
        <div className="content-body home">
          <div className="subsections">
            <div className="subsection about">
              <About />
            </div>
            <div className="subsection work">
              <h2>Things I've Made</h2>
              <Work />
            </div>
            <div className="subsection work">
              <h2>Things I've Written</h2>
              <Blog />
            </div>
            <div className="subsection contact">
              <h2>Get In Touch</h2>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
