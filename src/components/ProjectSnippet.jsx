import React from 'react'

import Img from 'gatsby-image'
import TransitionLink from "gatsby-plugin-transition-link"
import { motion } from 'framer-motion'


const ProjectSnippet = ({ setActiveImage, imageIndex, title, blurb, imageFluid, slug }) => {

  const variants = {
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + ((i + 1) * 0.1),
        type: 'spring',
        damping: 100,
        mass: 1
      }
    }),
    hide: {
      opacity: 0,
      y: 30
    }
  }

  return (
    <TransitionLink
      className="link"
      to={slug}
      exit={{
        length: 0.5,
      }}
      entry={{
        delay: 0.2,
      }}
      className="relative block mb-6 lg:text-gray-600 text-gray-900 hover:text-gray-900 transition-color"
      onMouseEnter={() => { setActiveImage(imageIndex) }}
    >
      <motion.div
        variants={variants}
        initial="hide"
        animate="show"
        custom={imageIndex}
      >
        <h2 className="font-bold underline text-xl lg:mb-0 mb-4">{title}</h2>
        <Img className="lg:hidden" fluid={imageFluid} />
        <p className="lg:mt-1 mt-6 sm:text-base text-sm">{blurb}</p>
      </motion.div>
    </TransitionLink>
  )
}

export default ProjectSnippet