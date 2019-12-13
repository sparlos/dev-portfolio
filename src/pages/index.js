import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  console.log(projects)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image file={'gatsby-astronaut'} />
      </div>
      <div className="projects">
        <h3 className="text-3xl font-bold">Projects</h3>
        <ul>
          {projects.map(({node}) => {
            const {title, tags, image} = node.frontmatter

            return (
              <li key={node.id}>
                <img src={image.publicURL}></img>
                {title} - {tags}
              </li>
            )
          })

          }
        </ul>
      </div>
      <br/>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            tags
            image {
              id
              publicURL
            }
          }
        }
      }
    }
  }
`

export default IndexPage
