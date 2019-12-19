import React from "react"

import { graphql } from "gatsby"

const Project = ({ data }) => {
  const post = data.markdownRemark
  const { title, tags } = post.frontmatter

  return (
    <div>
      <h1>{title}</h1>
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
      }
    }
  }
`
