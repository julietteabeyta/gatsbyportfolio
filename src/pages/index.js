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
  <>
    <div className="header">
      <div className="nav">
        <Link to="/"><img src={jsaIcon} alt="Juliette Icon" /></Link>
      </div>
    </div>
    <Layout>
      <SEO title="Home" />
      <div>
        <div className="content-body home">
          <About />
          <div className="subsections">
            <div className="subsection work">
              <Work />
            </div>
            <div className="subsection skills">
              <Skills />
            </div>
            <div className="subsection mentions">
              <Mentions />
            </div>
            <div className="subsection contact">
              <Contact />
            </div>
          </div>
        </div>
        <ReactSVG src={bust} />
      </div>
    </Layout>
  </>
)

export default IndexPage
