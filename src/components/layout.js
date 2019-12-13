/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Box from "../components/Box"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        className="relative lg:w-11/12 md:w-full bg-gray-100 h-screen mx-auto"
        style={{
          minHeight: 850,
        }}
      >
        <Box
          size={56}
          position={{
            right: "10%",
            top: 70,
          }}
          rotation={45}
        />

        <Box
          size={40}
          position={{
            left: "15%",
            bottom: 175,
          }}
          rotation={15}
        />

        <Box
          size={32}
          position={{
            right: "15%",
            bottom: 175,
          }}
          rotation={30}
        />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
