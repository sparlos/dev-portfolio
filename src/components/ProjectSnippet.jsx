import React from 'react'

import Img from 'gatsby-image'

const ProjectSnippet = (props) => {

  return (
    <div className="relative mb-6" onMouseEnter={() => {props.setActiveImage(props.imageIndex)}}>
      <h2 className="font-bold underline text-xl">{props.title}</h2>
      <p className="mt-1">{props.blurb}</p>
      <Img className="lg:hidden" fluid={props.imageFluid} />
    </div>
  )
}

export default ProjectSnippet