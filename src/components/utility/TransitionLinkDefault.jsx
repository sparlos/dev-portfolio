import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'

const TransitionLinkDefault = props => (
  <TransitionLink
    exit={{
      length: 0.5,
    }}
    entry={{
      delay: 0.2,
    }}
    {...props}
  >
    {props.children}
  </TransitionLink>
)


export default TransitionLinkDefault