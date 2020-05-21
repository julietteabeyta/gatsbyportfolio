import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import anime from 'animejs/lib/anime.es.js';

import '../styles/layout.scss';
import Header from '../images/test.inline.svg';
import yellowIcon from '../images/FFFF00-logo.svg';
import blueIcon from '../images/00FFFF-logo.svg';
import pinkIcon from '../images/FF00FF-logo.svg';
import twitter from '../images/twitter.svg';
import linkedIn from '../images/linkedIn.svg';
import github from '../images/github.svg';
import codepen from '../images/codepen.svg';
import Transition from '../components/transition';

const Layout = ({ children, location }) => {
  const [visible, setVisible] = useState('');
  const [invisible, setInvisible] = useState('');

  if (window.innerWidth > 768) {
    setTimeout(() => {
      setVisible('visible');
    }, 5500);
    setTimeout(() => {
      setInvisible('invisible');
    }, 4000);
  } else {
    setTimeout(() => {
      setVisible('visible');
    }, 2200);
  }
  useEffect(() => {
    anime({
      targets: '.header-svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      delay: function (el, i) { return i * 150 },
      duration: 1900,
    });
  }, [])
  return (
    <>
      <Header className={`${invisible} header-svg`} />
      <div className={`${visible} content-container`}>
        <div className="nav">
          <Link id="home-link" to="/">
            <img className="app-icon" id="yellow-icon" src={yellowIcon} alt="Juliette Icon" />
            <img className="app-icon" id="blue-icon" src={blueIcon} alt="Juliette Icon" />
            <img className="app-icon" id="pink-icon" src={pinkIcon} alt="Juliette Icon" />
          </Link>
          {location && location.href && !location.href.includes('blog/') &&
            <>
              <a className="nav-link" href="#about">
                About
            </a>
              <a className="nav-link" href="#work">
                Work
            </a>
              <a className="nav-link" href="#blog">
                Blog
            </a>
              <a className="nav-link" href="#contact">
                Contact
            </a>
            </>
          }
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
