/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { motion, AnimatePresence } from "framer-motion"

import Header from "./header"

import Box from "../components/Box"
import FancyBox from "../components/FancyBox"
import NavbarToggle from "../components/NavbarToggle"
import Navbar from "./Navbar"

import "./tailwind.css"
import "./box.scss"

const Layout = ({ children, selected, path }) => {
  const [navbar, setNavbar] = useState(false)
  const handleSetNavbar = () => setNavbar(!navbar)

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
      className="relative lg:w-11/12 md:w-full bg-gray-100 mx-auto overflow-x-hidden min-h-screen"
      style={{
        zIndex: 0,
      }}
    >
      <AnimatePresence>
        {navbar && (
          <motion.div
            key="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>
      <NavbarToggle navbar={navbar} setNavbar={handleSetNavbar} />
      {children}
      <FancyBox custom={2} />
      <Box size={56} position={1} rotation={45} custom={1} path={path} />

      <Box size={40} position={2} rotation={15} custom={2} path={path} />

      <Box size={32} position={3} rotation={30} custom={3} path={path} />
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
