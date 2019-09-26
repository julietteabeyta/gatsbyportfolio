import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/layout.scss"
import jsaIcon from "../images/jsaBlackLogo.png"
import twitter from "../images/twitter.svg"
import linkedIn from "../images/linkedIn.svg"
import github from "../images/github.svg"
import codepen from "../images/codepen.svg"
import Transition from "../components/transition"

const Layout = ({ children, location }) => {
  return (
    <div className="content-container">
      <div className="nav">
        <Link id="home-nav" to="/">
          <img id="app-icon" src={jsaIcon} alt="Juliette Icon" />
        </Link>
        <div className="header-contact">
          <a
            href="https://twitter.com/julietteabeyta"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="link-new-window"
          >
            <img src={twitter} alt="Black Twitter bird logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/juliette-abeyta-90b761162/"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="link-new-window"
          >
            <img src={linkedIn} alt="Black LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/julietteabeyta"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="link-new-window"
          >
            <img src={github} alt="Black GitHub octocat logo" />
          </a>
          <a
            href="https://codepen.io/julietteabeyta"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="link-new-window"
          >
            <img src={codepen} alt="Black CodePen logo" />
          </a>
        </div>
      </div>
      <Transition location={location}>
        <main>{children}</main>
      </Transition>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
