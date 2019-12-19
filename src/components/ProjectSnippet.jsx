import React from 'react'

import Img from 'gatsby-image'

const ProjectSnippet = ({ setActiveImage, imageIndex, title, blurb, imageFluid }) => {

  return (
    <a
      href="#"
      className="relative block mb-6 lg:text-gray-600 text-gray-900 hover:text-gray-900 transition-color"
      onMouseEnter={() => { setActiveImage(imageIndex) }}
    >
      <h2 className="font-bold underline text-xl lg:mb-0 mb-4">{title}</h2>
      <Img className="lg:hidden" fluid={imageFluid} />
      <p className="lg:mt-1 mt-6 sm:text-base text-sm">{blurb}</p>
    </a>
  )
}

export default ProjectSnippet