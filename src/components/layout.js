import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { motion, AnimatePresence } from 'framer-motion'

import Box from '../components/Box'
import FancyBox from '../components/FancyBox'
import NavbarToggle from '../components/NavbarToggle'
import Navbar from './Navbar'

import './tailwind.css'
import './box.scss'

const Layout = ({ children, path }) => {
  const [navbar, setNavbar] = useState(false)
  const handleSetNavbar = () => setNavbar(!navbar)

  const backgroundVariants = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  }

  const transition = {
    type: 'spring',
    damping: 100,
    mass: 0.5,
  }

  return (
    <div>
      <AnimatePresence>
        {navbar && (
          <motion.div
            key='navbar'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className='fixed h-screen w-full z-40 bg-gray-900 ,'
          >
            <Navbar toggleNavbar={handleSetNavbar} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {path !== '/' && (
          <NavbarToggle
            navbar={navbar}
            setNavbar={handleSetNavbar}
            transition={transition}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={backgroundVariants}
        className='relative lg:w-11/12 md:w-full bg-gray-100 mx-auto overflow-x-hidden min-h-screen'
        style={{
          zIndex: 0,
        }}
      >
        <div className='relative z-0'>{children}</div>
        <FancyBox custom={2} />
        <Box size={56} position={1} rotation={45} custom={1} path={path} />

        <Box size={40} position={2} rotation={15} custom={2} path={path} />

        <Box size={32} position={3} rotation={30} custom={3} path={path} />
      </motion.div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
