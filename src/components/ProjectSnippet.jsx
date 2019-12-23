import React from 'react'

import Img from 'gatsby-image'
import TransitionLinkDefault from '../components/TransitionLinkDefault'
import { motion } from 'framer-motion'

const ProjectSnippet = ({
  setActiveImage,
  imageIndex,
  title,
  blurb,
  imageFluid,
  slug,
  maintech,
}) => {
  const variants = {
    show: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + (i + 1) * 0.1,
        type: 'spring',
        damping: 100,
        mass: 1,
      },
    }),
    hide: {
      opacity: 0,
      y: 30,
    },
  }

  return (
    <TransitionLinkDefault
      className='relative block mb-8 lg:text-gray-600 text-gray-900 hover:text-gray-900 transition-color'
      to={slug}
      onMouseEnter={() => {
        setActiveImage(imageIndex)
      }}
    >
      <motion.div
        variants={variants}
        initial='hide'
        animate='show'
        custom={imageIndex}
      >
        <h2 className='underline text-2xl'>{title}</h2>
        <div className='lg:mb-0 font-bold mb-4 mt-2'>
          {maintech.split(',').map((item, i) => (
            <span key={i}>
              {i !== 0 ? ' |' : ''} {item}
            </span>
          ))}
        </div>
        <Img className='lg:hidden shadow-lg' fluid={imageFluid} />
        <p className='lg:mt-2 mt-6 sm:text-base text-sm'>{blurb}</p>
      </motion.div>
    </TransitionLinkDefault>
  )
}

export default ProjectSnippet
