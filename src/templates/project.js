import React from 'react'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import { motion } from 'framer-motion'
import { TransitionState } from 'gatsby-plugin-transition-link'
import TransitionLinkDefault from '../components/TransitionLinkDefault'
import './project.scss'

const Project = ({ data }) => {
  const post = data.markdownRemark
  const { title, image, tags } = post.frontmatter

  const tagList = () =>
    tags.split(',').map((tag, i) => {
      return (
        <li
          className='flex xl:flex-33 flex-initial mt-3 lg:ml-0 mr-6'
          key={tag}
        >
          <span className={`text-left w-full`}>{tag}</span>
        </li>
      )
    })

  const variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        mass: 1,
        damping: 50,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      x: 0,
      transition: {
        type: 'spring',
        mass: 0.3,
        damping: 50,
      },
    },
  }

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <motion.div
          className='w-full font-sans my-32 xl:px-32 text-gray-900'
          variants={variants}
          initial='hidden'
          animate={
            ['entering', 'entered', 'POP'].includes(transitionStatus)
              ? 'show'
              : 'exit'
          }
        >
          <SEO title={title} />
          <div className='flex flex-wrap lg:justify-start justify-center px-4'>
            <h1 className='sm:text-4xl sm:font-normal font-bold text-3xl tracking-wide font-normal lg:flex-100 sm:flex-75 flex-100 mb-4'>
              {title}
            </h1>
            <div className='lg:flex-50 sm:flex-75 flex-100 pr-4'>
              <Img className='w-full shadow-lg' fluid={image.childImageSharp.fluid} />
            </div>
            <div className='lg:flex-50 sm:flex-75 flex-100 lg:pl-4 lg:mt-0 mt-6 content-start flex flex-wrap justify-center lg:order-none order-last xl:px-10'>
              <h3 className='font-bold flex-100 mb-2 text-gray-700'>
                Description
              </h3>
              <div
                className='project-text'
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <TransitionLinkDefault
                className='underline text-teal-500 flex-100 mt-6'
                to='/projects'
                exit={{
                  length: 0.5,
                }}
                entry={{
                  delay: 0.2,
                }}
              >
                Back to Projects
              </TransitionLinkDefault>
            </div>
            <div className='lg:flex-50 sm:flex-75 flex-100'>
              <h3 className='mt-6 font-bold text-gray-700'>
                Technologies Used
              </h3>
              <ul className='flex flex-wrap xl:justify-between text-gray-600'>
                {tagList()}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </TransitionState>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
