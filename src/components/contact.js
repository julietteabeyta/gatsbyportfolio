import React from "react"
import atsvg from '../images/atSymbol.svg'
import twittersvg from '../images/twitter.svg'
import linkedinsvg from '../images/linkedIn.svg'
import githubsvg from '../images/github.svg'
import codepensvg from '../images/codepen.svg'


const Contact = () => (
  <div className="contact">
    <a href="mailto:julietteabeyta@gmail.com" target="_blank" rel="noopener noreferrer"><img src={atsvg} alt="At symbol" className="contact-icon" /><p className="contact-title">Email</p></a>
    <a href="https://twitter.com/julietteabeyta" target="_blank" rel="noopener noreferrer"><img src={twittersvg} alt="Black Twitter bird" className="contact-icon" /><p className="contact-title">Twitter</p></a>
    <a href="https://www.linkedin.com/in/juliette-abeyta-90b761162/" target="_blank" rel="noopener noreferrer"><img src={linkedinsvg} alt="Black LinkedIn logo" className="contact-icon" /><p className="contact-title">LinkedIn</p></a>
    <a href="https://github.com/julietteabeyta" target="_blank" rel="noopener noreferrer"><img src={githubsvg} alt="Black Github logo" className="contact-icon" /><p className="contact-title">GitHub</p></a>
    <a href="https://codepen.io/julietteabeyta" target="_blank" rel="noopener noreferrer"><img src={codepensvg} alt="Black Codepen logo" className="contact-icon" /><p className="contact-title">CodePen</p></a>
  </div>
)

export default Contact
