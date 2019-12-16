/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { motion } from "framer-motion"

import Header from "./header"

import Box from "../components/Box"
import FancyBox from "../components/FancyBox"

import "./tailwind.css"
import "./box.scss"

const Layout = ({ children, selected }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const backgroundVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
    hidden: { opacity: 0 },
  }


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={backgroundVariants}
      className="relative lg:w-11/12 md:w-full bg-gray-100 h-screen mx-auto overflow-hidden"
      style={{
        height: '100vh',
        minHeight: 720,
        zIndex: 0,
      }}
    >
      { children }
      <FancyBox custom={2} />
      <Box
        size={56}
        position={1}
        rotation={45}
        custom={1}
        selected={0 === selected}
      />

      <Box
        size={40}
        position={2}
        rotation={15}
        custom={2}
        selected={1 === selected}
      />

      <Box
        size={32}
        position={3}
        rotation={30}
        custom={3}
        selected={2 === selected}
      />
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
