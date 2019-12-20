import React from 'react'

import { motion } from 'framer-motion'
import SEO from '../components/seo'

import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'

import Icon from '../components/Icon'

import {
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelopeSquare,
  FaGithubSquare,
  FaCodepen,
} from 'react-icons/fa'

const contact = () => {
  const containerVariants = {
    show: {
      opacity: 1,
      scaleX: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 200,
        mass: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        type: 'spring',
        damping: 200,
        mass: 0.3,
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 100,
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 100,
      },
    },
  }

  return (
    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <motion.div
            className='relative xl:w-4/6 w-5/6 font-sans my-32 mx-auto text-gray-900'
            variants={containerVariants}
            initial='hidden'
            animate={
              ['entering', 'entered', 'POP'].includes(transitionStatus)
                ? 'show'
                : 'exit'
            }
          >
            <SEO title='Contact' />
            <motion.h1
              variants={headingVariants}
              className='heading-main sm:text-left'
            >
              Contact
            </motion.h1>
            <div className='w-full mx-auto bg-gray-200 sm:py-20 py-12 sm:mt-12 mt-6 rounded-lg flex flex-wrap justify-around items-center text-6xl sm:px-10 px-6'>
              <Icon
                href='https://www.linkedin.com/in/stephen-sparling-033643171/'
                linkTitle='LinkedIn'
                customClasses='sm:mb-0 mb-6 flex-50'
              >
                <FaLinkedin className='mx-auto' />
              </Icon>

              <Icon
                href='https://twitter.com/SparlosCode'
                linkTitle='Twitter'
                customClasses='sm:mb-0 mb-6 flex-50'
              >
                <FaTwitterSquare className='mx-auto' />
              </Icon>

              <Icon
                href='mailto:sparlingcreations@gmail.com'
                linkTitle='Email'
                customClasses='order-first sm:order-none sm:mb-0 mb-6 flex-100'
              >
                <FaEnvelopeSquare className='mx-auto' />
              </Icon>

              <Icon
                href='https://github.com/sparlos'
                linkTitle='GitHub'
                customClasses='flex-50'
              >
                <FaGithubSquare className='mx-auto' />
              </Icon>

              <Icon
                href='https://codepen.io/sparlos'
                linkTitle='CodePen'
                customClasses='flex-50'
              >
                <FaCodepen className='mx-auto' />
              </Icon>
            </div>
            <motion.div variants={iconVariants} className='mt-8 underline'>
              <TransitionLink
                className='link'
                to='/'
                exit={{
                  length: 0.5,
                }}
                entry={{
                  delay: 0.2,
                }}
              >
                Back Home
              </TransitionLink>
            </motion.div>
          </motion.div>
        )
      }}
    </TransitionState>
  )
}

export default contact
