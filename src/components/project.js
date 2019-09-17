import React from "react"

function Project(props) {
  return (
    <div className="project">
      <a
        href={props.url}
        rel="noopener noreferrer"
        target="_blank"
        aria-describedby="link-new-window"
      >
        <h3>{props.title}</h3>
      </a>
      <p className="project-date">{props.date}</p>
      <p>{props.description}</p>
      <div className="project-tags">
        {props.tags.map((tag, index) => {
          return (
            <div key={index} className="project-tag">
              {tag}
            </div>
          )
        })}
      </div>
      <span id="link-new-window" hidden>
        Opens in a new window
      </span>
    </div>
  )
}

export default Project
