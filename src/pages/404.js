import React from 'react'

import TransitionLinkDefault from '../components/TransitionLinkDefault'
import { TransitionState } from 'gatsby-plugin-transition-link'

import { motion } from 'framer-motion'

import SEO from '../components/seo'

const NotFoundPage = () => {
  const variants = {
    exit: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  }

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <motion.div
          className='xl:w-3/6 lg:w-4/6 w-5/6 lg:ml-56 font-sans lg:my-40 my-32 pb-32 mx-auto'
          variants={variants}
          initial='exit'
          animate={
            ['entering', 'entered', 'POP'].includes(transitionStatus)
              ? 'show'
              : 'exit'
          }
        >
          <SEO title='404: Not found' />
          <h1 className='heading-main mb-4'>Not Found</h1>
          <p className='mb-4'>The page you've navigated to doesn't exist.</p>
          <TransitionLinkDefault className='link font-bold' to='/'>
            Back home
          </TransitionLinkDefault>
        </motion.div>
      )}
    </TransitionState>
  )
}

export default NotFoundPage
