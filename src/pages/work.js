import React from "react"

import Project from "../components/project"

const SecondPage = () => (
  <div className="work section">
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
)

export default SecondPage
