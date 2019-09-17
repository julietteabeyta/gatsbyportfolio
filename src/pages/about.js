import React from "react"
import { Link } from "gatsby"

const About = () => (
  <div className="about show-on-scroll">
    <h1>Hey! It's me, Juliette.</h1>
    <p className="introduction">
      I'm a front-end developer based in Denver, relocating to Los Angeles. I
      currently lead a multidisciplinary team of engineering talent at{" "}
      <a
        href="https://fluentstream.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="link-new-window"
      >
        <b>FluentStream</b>
      </a>
      . I'm looking for a new opportunity in California.
    </p>
    <div className="about-text">
      <div>
        <p>
          I am your average role-playing, coffee-drinking lover of all things
          horror.
        </p>
        <p>
          In addition to development, I have started a small{" "}
          <Link to="/blog">blog</Link> in which I document information on
          miscellaneous topics I have researched each week to help me grow
          personally and professionally. I also enjoy reading, cooking good
          vegan food, and taking long walks on the beach. And I am always
          looking to connect!
        </p>
      </div>
      <div className="about-placeholder"></div>
    </div>
    <span id="link-new-window" hidden>
      Opens in a new window
    </span>
  </div>
)

export default About
