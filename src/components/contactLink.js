import React from "react"

const ContactLink = props => (
  <div className="contact-link">
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-describedby="link-new-window"
      className="contact-link"
    >
      <img src={props.imgsrc} alt={props.altText} />
      <p>
        {props.linkName}{" "}
        <span className="contact-handle">- {props.handle}</span>
      </p>
    </a>
  </div>
)

export default ContactLink
