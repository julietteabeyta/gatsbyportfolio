import React from "react"

const SecondPage = () => (
  <div className="mentions section">
    <p>
      I was recently given the opportunity to speak about some of my experiences
      as a woman in tech. You can read about that on Built In Colorado{" "}
      <a
        href="https://www.builtincolorado.com/2019/06/25/colorado-women-software-engineers-changing-tech"
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="link-new-window"
      >
        here!
      </a>
    </p>
    <span id="link-new-window" hidden>
      Opens in a new window
    </span>
  </div>
)

export default SecondPage
