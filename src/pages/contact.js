import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact section">
      <p>Find me various places on the world wide web:</p>
      <li><a href="mailto:julietteabeyta@gmail.com">Email</a></li>
      <li><a href="https://twitter.com/julietteabeyta">Twitter</a></li>
      <li><a href="https://www.linkedin.com/in/juliette-abeyta-90b761162/">LinkedIn</a></li>
      <li><a href="https://github.com/julietteabeyta">GitHub</a></li>
      <li><a href="https://codepen.io/julietteabeyta">Codepen</a></li>
    </div>
  </Layout>
)

export default SecondPage
