import React from "react"

import { graphql } from "gatsby"
import Img from 'gatsby-image'

const Project = ({ data }) => {
  const post = data.markdownRemark
  const { title, image, tags } = post.frontmatter

  return (
    <div>
      <h1>{title}</h1>
      <Img className="w-3/6" fluid={image.childImageSharp.fluid} />
      <div>{tags}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
