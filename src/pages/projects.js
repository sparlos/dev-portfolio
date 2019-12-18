import React from "react"

import { graphql } from "gatsby"

import ProjectSnippet from "../components/ProjectSnippet"
import ImageSwitcher from "../components/ImageSwitcher"

const Projects = ({ data }) => {
  console.log(data)

  const projects = () =>
    data.allMarkdownRemark.edges.map(({ node }) => {
      const id = node.id
      const { title, blurb, image } = node.frontmatter

      const imageFluid = image.childImageSharp.fluid

      return (
        <ProjectSnippet
          key={id}
          title={title}
          blurb={blurb}
          imageFluid={imageFluid}
        ></ProjectSnippet>
      )
    })

  return (
    <div className="font-sans my-32 flex">
      <div className="lg:pl-40 w-3/6">
        <h1 className="text-5xl font-normal tracking-widest text-bold">
          Projects
        </h1>
        <div className="mt-6">{projects()}</div>
      </div>
      <div>
        <ImageSwitcher />
      </div>
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
                fluid(maxWidth: 800) {
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
