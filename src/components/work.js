import React from "react"
import Project from "./project"
const SecondPage = () => (
  <>
    <Project
      url="https://tasktracker.juliette.dev"
      title="That Vue.js Task Tracker Everyone Makes"
      date="05.20"
      description="I built this task tracker to familiarize myself with event handling and the full structure of the Vue framework. This is a task management application in which users can create/edit tasks and mark them as completed."
      tags={["Vue", "Parcel", "SVG"]}
    />
    <Project
      url="https://spacex.juliette.dev"
      title="SpaceX Launches"
      date="09.19"
      description="This is a single page React application that allows users to search the SpaceX GraphQL server for upcoming and past SpaceX launches by mission name, rocket name, or launch year. Each mission matching the search returns with this data, and a launch video link if found."
      tags={["React", "GraphQL"]}
    />
    <Project
      url="https://fibonacci.juliette.dev"
      title="Fibonacci Generator"
      date="07.19"
      description="This app does as the name implies; given a user-supplied input of desired sequence values, a Fibonacci sequence is returned. I knew very little about the sequence before researching it, and it only seemed right to build an application to accompany my findings."
      tags={["Javascript"]}
    />
    <Project
      url="https://halloween.juliette.dev"
      title="Halloween Countdown"
      date="04.19"
      description="This aptly name countdown application is my most recent employment of Three.js. I also had the challenge of managing dates to calculate the time until Halloween regardless of year. It is never too early to check how long until the next All Hallows Eve."
      tags={["React", "Three.js"]}
    />
    <span id="link-new-window" hidden>
      Opens in a new window
    </span>
  </>
)

export default SecondPage
