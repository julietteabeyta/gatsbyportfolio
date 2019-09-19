import React from "react"
import Project from "../components/project"
const SecondPage = () => (
  <div className="work section">
    <Project
      url="http://crit.fail"
      title="Initiative"
      date="05.19-present"
      description="Initiative is a Table Top RPG companion application with the mission of simplifiying character management and improving gameplay. Quick, seamless access to character sheets mitigate time shuffling through paperwork and leave more time for adventure."
      tags={["React", "Leadership"]}
    />
    <Project
      url="https://fibonacci.juliette.dev"
      title="Fibonacci Generator"
      date="06.19"
      description="This app does as the name implies; given a user-supplied input of desired sequence values, a Fibonacci sequence is returned. I knew very little about the sequence before researching it, and it only seemed right to build an application to accompany my findings."
      tags={["Javascript"]}
    />
    <Project
      url="https://halloween.juliette.dev"
      title="Halloween Countdown"
      date="04.19"
      description="This aptly name countdown application is my most recent employment of Three.js. I also had the challenge of managing dates to calculate the time until Halloween regardless of year. It is never too early to know how long until the next hallows eve. Happy haunting!"
      tags={["React", "Three.js", "Javascript"]}
    />
    <span id="link-new-window" hidden>
      Opens in a new window
    </span>
  </div>
)

export default SecondPage
