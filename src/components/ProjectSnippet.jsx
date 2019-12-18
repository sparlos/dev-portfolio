import React from 'react'

import Img from 'gatsby-image'

const ProjectSnippet = (props) => {

  return (
    <a
      href="#" 
      className="relative block mb-6 lg:text-gray-600 text-gray-900 hover:text-gray-900 transition-color" 
      onMouseEnter={() => { props.setActiveImage(props.imageIndex) }}
    >
      <h2 className="font-bold underline text-xl">{props.title}</h2>
      <p className="mt-1">{props.blurb}</p>
      <Img className="lg:hidden" fluid={props.imageFluid} />
    </a>
  )
}

export default ProjectSnippet