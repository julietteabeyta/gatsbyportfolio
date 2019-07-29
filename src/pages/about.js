import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about section">
      <p>
        I am your average role-playing, coffee-drinking lover of all things horror.
        I currently manage a full-stack development team focusing on writing modular, scalable
        code and perpetuating an inclusive, supportive culture. As a developer, I have a passion
        for building seamless interactions and creating useful, beautiful digital experiences.
        I have found that am happiest coding when I am working on creative projects involving
        the creation, implementation, and animation of SVGs, and when I am working with new,
        exciting technologies.
      </p>
      <br />
      <p>
        In addition to development, I enjoy good books, learning about a multitude of things,
        and long walks on the beach. And I am always looking to connect! You can reach me most easily on <a href="https://twitter.com/julietteabeyta" target="_blank" rel="noopener noreferrer">twitter</a>, but feel free to shoot me an email <a href="mailto:julietteabeyta@gmail.com" rel="noopener noreferrer">here.</a>
      </p>
    </div>
  </Layout>
)

export default About
