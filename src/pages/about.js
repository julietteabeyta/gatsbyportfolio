import React from "react"
import { Link } from "gatsby"
import bust from "../images/bust.svg"

const About = () => (
  <div className="about show-on-scroll">
    <h1>Hey! It's me, Juliette.</h1>
    <p className="introduction">
      I'm a full-stack developer based in Los Angeles, California. I work on a multidisciplinary team of engineering at{" "}
      <a
        href="https://evgo.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="link-new-window"
      >
        <b>EVgo</b>
      </a>
      .
    </p>
    <div className="about-text">
      <img src={bust} alt="Outline of Juliette" className="about-placeholder" />
      <div>
        <p>
          In over two years of slinging code, I have gained proficiencies in
          various languages, specializing in JavaScript. I love writing
          scalable, modular applications, and learning & optimizing along the
          way.
        </p>
        <p>
          I am deeply passionate about expanding my knowledge in myriad
          disciplines. In addition to development, I have started a small{" "}
          <Link to="/blog">blog</Link> in which I exercise broadening my
          knowledge on various topics. I also enjoy reading, cooking good vegan
          food, and taking long walks on the beach. And I am always looking to
          connect!
        </p>
      </div>
    </div>
    <span id="link-new-window" hidden>
      Opens in a new window
    </span>
  </div>
)

export default About
