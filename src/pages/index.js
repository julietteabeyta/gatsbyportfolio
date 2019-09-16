import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import jsaIcon from "../images/jsaBlackLogo.png"
import bust from "../images/bust.svg"
import About from "./about"
import Work from "./work"
import Skills from "./skills"
import Mentions from "./mentions"

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
              <h3>Things I have worked on:</h3>
              <Work />
            </div>
            <div className="subsection skills">
              <h3>Things I am good at:</h3>
              <Skills />
            </div>
            <div className="subsection mentions">
              <h3>Bonus!</h3>
              <Mentions />
            </div>
            <div className="subsection contact">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
