import React from 'react'

import Img from 'gatsby-image'

const ProjectSnippet = (props) => {
  console.log(props)

  return (
    <div className="relative mb-6">
      <h2 className="font-bold underline text-xl">{props.title}</h2>
      <p className="mt-1">{props.blurb}</p>
      <Img className="lg:hidden" fluid={props.imageFluid} />
    </div>
  )
}

export default ProjectSnippet