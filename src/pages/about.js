import React from "react"
import { Link } from "gatsby"

const About = () => (
  <div className="about show-on-scroll">
    <p>
      Hey! It's me, Juliette. I am your average role-playing, coffee-drinking lover of all things horror.
      I currently manage a full-stack development team focusing on writing modular, scalable
      code and perpetuating an inclusive, supportive culture. As a developer, I have a passion
      for building seamless interactions and creating useful, beautiful digital experiences.
      I have found that am happiest coding when I am working on creative projects involving
      the creation, implementation, and animation of SVGs, and when I am working with new,
      exciting technologies.
    </p>
    <p>
      In addition to development, I have started a small <Link to="/blog">blog</Link> in which I document information on
      miscellaneous topics I have researched that week to help me grow personally and professionally.
      I also enjoy reading, cooking good vegan food, and taking long walks on the beach.
      And I am always looking to connect! You can reach me most easily on <a href="https://twitter.com/julietteabeyta" target="_blank" rel="noopener noreferrer" aria-describedby="link-new-window">twitter</a>, but feel free to shoot me an email <a href="mailto:julietteabeyta@gmail.com" rel="noopener noreferrer" target="_blank" aria-describedby="link-new-window">here.</a>
    </p>
    <span id="link-new-window" hidden>Opens in a new window</span>
  </div>
)

export default About
