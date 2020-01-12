import React from 'react'

import { TransitionState } from 'gatsby-plugin-transition-link'
import TransitionLinkDefault from '../components/TransitionLinkDefault'

import SEO from '../components/seo'

import { motion } from 'framer-motion'

import './index.scss'

const IndexPage = () => {
  const variants = {
    hidden: {
      y: 150,
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 200,
        mass: 0.1,
      },
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
      },
    },
  }

  return (
    <div>
      <SEO title='Home' />
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <motion.div
              className='heading w-full text-center relative mx-auto font-sans text-gray-900 h-screen'
              variants={variants}
              initial='hidden'
              animate={
                ['entering', 'entered', 'POP'].includes(transitionStatus)
                  ? 'show'
                  : 'hidden'
              }
            >
              <div className='heading__text inline-block xl:-mt-6 lg:-mt-4 mt-16 xl:text-7xl lg:text-6xl sm:text-5xl text-4xl pb-20'>
                <span className='heading__s xl:text-11xl lg:text-10xl sm:text-9xl text-8xl'>
                  S
                </span>
                <span className='heading__top'>tephen</span>
                <span className='heading__bottom'>parling</span>
                <div className='sm:font-thin font-medium text-gray-600 lg:-mt-24 sm:-mt-12 -mt-4 sm:mr-8 text-base sm:text-xl text-right'>
                  Fullstack Web Developer & Designer
                </div>
                <ul className='nav font-medium sm:text-right text-center sm:mr-8 mt-8 sm:text-2xl text-xl underline'>
                  <li className=''>
                    <TransitionLinkDefault
                      to='/projects'
                      className='link--plain transition-color'
                    >
                      Projects
                    </TransitionLinkDefault>
                  </li>
                  <li className=' mt-4'>
                    <TransitionLinkDefault
                      to='/about'
                      className='link--plain transition-color'
                    >
                      About
                    </TransitionLinkDefault>
                  </li>
                  <li className=' mt-4'>
                    <TransitionLinkDefault
                      to='/contact'
                      className='link--plain transition-color'
                    >
                      Contact
                    </TransitionLinkDefault>
                  </li>
                </ul>
              </div>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default IndexPage
