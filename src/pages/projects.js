import React, { useState } from 'react'

import { TransitionState } from 'gatsby-plugin-transition-link'

import SEO from '../components/utility/seo'

import { motion } from 'framer-motion'

import { graphql } from 'gatsby'

import ProjectSnippet from '../components/ProjectSnippet'
import ImageSwitcher from '../components/ImageSwitcher'

const Projects = ({ data }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
      y: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        y: {
          from: 0,
        },
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

  const [activeImage, setActiveImage] = useState(null)

  const handleSetActiveImage = imageIndex => {
    setActiveImage(imageIndex)
  }

  const sortedNodes = () =>
    data.allMarkdownRemark.edges.sort((a, b) =>
      (a.node.frontmatter.position < b.node.frontmatter.position) ? -1 : 1
    )

  const projects = () =>
    sortedNodes().map(({ node }, i) => {
      const id = node.id
      const { title, blurb, image, maintech } = node.frontmatter
      const slug = node.fields.slug

      const imageFluid = image.childImageSharp.fluid

      return (
        <ProjectSnippet
          maintech={maintech}
          slug={slug}
          key={id}
          imageIndex={i}
          title={title}
          blurb={blurb}
          imageFluid={imageFluid}
          setActiveImage={handleSetActiveImage}
        ></ProjectSnippet>
      )
    })

    const sortedProjects = () =>
      projects.sort((a, b) => (a.position < b.position) ? 1 : -1)

  const images = () =>
    data.allMarkdownRemark.edges.map(
      ({ node }) => node.frontmatter.image.childImageSharp.fluid
    )

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <div className='font-sans my-32 flex text-gray-900'>
          <SEO title='Projects' />
          <motion.div
            className='lg:pl-40 lg:mx-0 mx-auto lg:w-3/6 w-5/6'
            variants={variants}
            initial='hidden'
            animate={
              ['entering', 'entered', 'POP'].includes(transitionStatus)
                ? 'show'
                : 'exit'
            }
          >
            <h1 className='heading-main'>Projects</h1>
            <div className='mt-6'>{projects()}</div>
          </motion.div>
          <ImageSwitcher
            activeImage={activeImage}
            images={images()}
            transitionStatus={transitionStatus}
          />
        </div>
      )}
    </TransitionState>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            blurb
            maintech
            position
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
    }
  }
`

export default Projects
