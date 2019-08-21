import React from "react"
import atSymbol from '../images/atSymbol.svg';
import twitter from '../images/twitter.svg';
import linkedIn from '../images/linkedIn.svg';
import github from '../images/github.svg';
import codepen from '../images/codepen.svg';

const Contact = () => (
  <div className="contact section">
    <div><a href="mailto:julietteabeyta@gmail.com" target="_blank" rel="noopener noreferrer" aria-describedby="link-new-window"><img src={atSymbol} alt="Black at symbol" /></a></div>
    <div><a href="https://twitter.com/julietteabeyta" target="_blank" rel="noopener noreferrer" aria-describedby="link-new-window"><img src={twitter} alt="Black Twitter bird logo" /></a></div>
    <div><a href="https://www.linkedin.com/in/juliette-abeyta-90b761162/" target="_blank" rel="noopener noreferrer" aria-describedby="link-new-window"><img src={linkedIn} alt="Black LinkedIn logo" /></a></div>
    <div><a href="https://github.com/julietteabeyta" target="_blank" rel="noopener noreferrer" aria-describedby="link-new-window"><img src={github} alt="Black GitHub octocat logo" /></a></div>
    <div><a href="https://codepen.io/julietteabeyta" target="_blank" rel="noopener noreferrer" aria-describedby="link-new-window"><img src={codepen} alt="Black CodePen Logo" /></a></div>
    <span id="link-new-window" hidden>Opens in a new window</span>
  </div>
)

export default Contact
