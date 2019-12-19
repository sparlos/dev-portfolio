import React, { useState } from "react"

import { graphql } from "gatsby"
import { motion } from "framer-motion"

import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"

import ProjectSnippet from "../components/ProjectSnippet"
import ImageSwitcher from "../components/ImageSwitcher"

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
        type: "spring",
        mass: 1,
        damping: 50,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 50,
      },
    },
  }

  const [activeImage, setActiveImage] = useState(null)

  const handleSetActiveImage = imageIndex => {
    setActiveImage(imageIndex)
  }

  const projects = () =>
    data.allMarkdownRemark.edges.map(({ node }, i) => {
      const id = node.id
      const { title, blurb, image } = node.frontmatter
      const slug = node.fields.slug

      const imageFluid = image.childImageSharp.fluid

      return (
        <ProjectSnippet
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

  const images = () =>
    data.allMarkdownRemark.edges.map(
      ({ node }) => node.frontmatter.image.childImageSharp.fluid
    )

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <div className="font-sans my-32 flex text-gray-900">
          <motion.div
            className="lg:pl-40 lg:mx-0 mx-auto lg:w-3/6 w-5/6"
            variants={variants}
            initial="hidden"
            animate={
              ["entering", "entered", "POP"].includes(transitionStatus)
                ? "show"
                : "exit"
            }
          >
            <h1 className="heading-main">
              Projects
            </h1>
            <div className="mt-6">{projects()}</div>
          </motion.div>
          <ImageSwitcher activeImage={activeImage} images={images()} />
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
