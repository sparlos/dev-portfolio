import React, { useState } from "react"

import { graphql } from "gatsby"

import ProjectSnippet from "../components/ProjectSnippet"
import ImageSwitcher from "../components/ImageSwitcher"

const Projects = ({ data }) => {
  const [activeImage, setActiveImage] = useState(null)

  const handleSetActiveImage = imageIndex => {
    setActiveImage(imageIndex)
  }

  const projects = () =>
    data.allMarkdownRemark.edges.map(({ node }, i) => {
      const id = node.id
      const { title, blurb, image } = node.frontmatter

      const imageFluid = image.childImageSharp.fluid

      return (
        <ProjectSnippet
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
    <div className="font-sans my-32 flex"
    >
      <div className="lg:pl-40 w-3/6">
        <h1 className="text-5xl font-normal tracking-widest text-bold">
          Projects
        </h1>
        <div className="mt-6">{projects()}</div>
      </div>
      <ImageSwitcher activeImage={activeImage} images={images()} />
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
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
