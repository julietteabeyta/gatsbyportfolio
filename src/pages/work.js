import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const SecondPage = () => (
  <Layout>
    <SEO title="Work" />
    <div className="work section">
      <p>Projects:</p>
      <Project
        title="Initiative"
        url="http://crit.fail"
        description="Tabletop RPG companion app"
      />
      <Project
        title="Halloween Countdown"
        url="https://halloween.juliette.dev"
        description="Small React app that displays a countdown from the current date until Halloween"
      />
      <Project
        title="Fibonacci Sequence"
        url="https://fibonacci.juliette.dev"
        description="Simple web app that returns a Fibonacci sequence containing a user-requested amount of values"
      />
    </div>
  </Layout>
)

export default SecondPage
