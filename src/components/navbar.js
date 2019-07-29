import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <div>
    <Link to="/about/">about</Link>
    <br />
    <Link to="/work/">work</Link>
    <br />
    <Link to="/skills/">skills</Link>
    <br />
    <Link to="/mentions/">mentions</Link>
    <br />
    <Link to="/contact/">contact</Link>
    <br />
    <Link to="/blog/">blog</Link>
  </div>
);

export default Navbar
