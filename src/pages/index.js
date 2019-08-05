import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import feature from "../images/feature.jpg"
import About from "./about";
import Work from "./work";
import Skills from "./skills";
import Mentions from "./mentions";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="left">
        <img
          src={feature}
          alt="Three dimensional rendering of glasses floating above a wooden table"
          className="header-image"
        />
        <div class="leftbar-contact">
          <Contact />
        </div>
      </div>
      <div className="right">
        <About />
        <div className="subsections">
          <div className="subsection contact">
            <p className="subsection-header">Contact:</p>
            <Contact />
          </div>
          <div className="subsection skills">
            <p className="subsection-header">Superpowers:</p>
            <Skills />
          </div>
          <div className="subsection work">
            <p className="subsection-header">Projects:</p>
            <Work />
          </div>
          <div className="subsection mentions">
            <p className="subsection-header">Claim to Fame:</p>
            <Mentions />
          </div>
        </div>
      </div>
    </div>
  </Layout >
)

export default IndexPage
