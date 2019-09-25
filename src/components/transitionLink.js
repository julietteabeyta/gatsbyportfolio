import React from "react"

import anime from "animejs/lib/anime.es.js"
import TransitionLink from "gatsby-plugin-transition-link"

const AnimatedLink = props => {
  return (
    <TransitionLink
      to={props.to}
      className={props.className}
      id={props.id}
      entry={{
        length: 3000,
        trigger: ({ exit, node }) =>
          anime({
            targets: `.content-body`,
            opacity: [0, 1],
            duration: 3000,
          }),
      }}
    >
      {props.children}
    </TransitionLink>
  )
}

export default AnimatedLink
