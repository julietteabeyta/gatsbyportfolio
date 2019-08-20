import React from "react"
import { Link } from "gatsby"
import ReactSVG from 'react-svg'

import Layout from '../components/layout'
import SEO from "../components/seo"
import Contact from "../components/contact"
import jsaIcon from "../images/jsaBlackLogo.png"
import bust from "../images/bust.svg"
import About from "./about";
import Work from "./work";
import Skills from "./skills";
import Mentions from "./mentions";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="header">
        <div className="nav">
          <Link to="/"><img src={jsaIcon} alt="Juliette Icon" /></Link>
        </div>
      </div>
      <div className="content-body home">
        <About />
        <div className="subsections">
          <div className="subsection work">
            <p className="subsection-header">Projects:</p>
            <Work />
          </div>
          <div className="subsection skills">
            <p className="subsection-header">Superpowers:</p>
            <Skills />
          </div>
          <div className="subsection mentions">
            <p className="subsection-header">Claim to Fame:</p>
            <Mentions />
          </div>
          <div className="subsection contact">
            <p className="subsection-header">Contact:</p>
            <Contact />
          </div>
        </div>
      </div>
      <ReactSVG src={bust} />
    </div>
  </Layout>
)

export default IndexPage
