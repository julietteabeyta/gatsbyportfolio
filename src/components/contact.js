import React from "react"
import ContactLink from "../components/contactLink"
import twitter from "../images/twitter.svg"
import linkedIn from "../images/linkedIn.svg"
import github from "../images/github.svg"
import codepen from "../images/codepen.svg"

const Contact = () => (
  <div className="contact section">
    <p className="conclusion">
      Thank you so much for stopping by. Here are all of the places I have been on the internet. Hope to
      hear from you soon!
    </p>
    <ContactLink
      url="https://twitter.com/julietteabeyta"
      imgsrc={twitter}
      linkName="Twitter"
      handle="@julietteabeyta"
      altText="Black Twitter bird logo"
    />
    <ContactLink
      url="https://www.linkedin.com/in/juliette-abeyta-90b761162/"
      imgsrc={linkedIn}
      linkName="LinkedIn"
      handle="/in/juliette-abeyta-90b761162"
      altText="Black LinkedIn Logo"
    />
    <ContactLink
      url="https://github.com/julietteabeyta"
      imgsrc={github}
      linkName="GitHub"
      handle="@julietteabeyta"
      altText="Black GitHub octocat logo"
    />
    <ContactLink
      url="https://codepen.io/julietteabeyta"
      imgsrc={codepen}
      linkName="CodePen"
      handle="@julietteabeyta"
      altText="Black CodePen logo"
    />
    <span id="link-new-window" hidden>
      Opens in a new window
    </span>
  </div>
)

export default Contact
