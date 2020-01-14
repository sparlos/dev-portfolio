import React from 'react'

import { TransitionState } from 'gatsby-plugin-transition-link'
import TransitionLinkDefault from '../components/utility/TransitionLinkDefault'

import SEO from '../components/utility/seo'

import { motion } from 'framer-motion'


const NotFoundPage = () => {
  const variants = {
    hidden: {
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
          initial='hidden'
          animate={
            ['entering', 'entered', 'POP'].includes(transitionStatus)
              ? 'show'
              : 'hidden'
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
