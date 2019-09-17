import React from "react"
import Project from "../components/project"
const SecondPage = () => (
  <div className="work section">
    <Project
      url="http://crit.fail"
      title="Initiative"
      date="05.19-present"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      tags={["Javascript"]}
    />
    <Project
      url="https://fibonacci.juliette.dev"
      title="Fibonacci Generator"
      date="06.19"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      tags={["React", "Leadership"]}
    />
    <Project
      url="https://halloween.juliette.dev"
      title="Halloween Countdown"
      date="04.19"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      tags={["React", "Three.js", "Javascript"]}
    />
    <span id="link-new-window" hidden>
      Opens in a new window
    </span>
  </div>
)

export default SecondPage
