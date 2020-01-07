import React from 'react'
import { motion } from 'framer-motion'

import './NavbarToggle.scss'

const gray900 = '#1A202C'
const gray100 = '#F7FAFC'

const Bar = props => {
  const transition = {
    type: 'spring',
    damping: 200,
    mass: 0.2,
  }

  return (
    <motion.div
      {...props}
      variants={{
        open: {
          ...props.variants.open,
          transition,
        },
        closed: {
          backgroundColor: gray900,
          rotate: 0,
          y: 0,
          transition,
        },
      }}
      initial='closed'
      animate={props.navbar ? 'open' : 'closed'}
      className={`${props.className} block w-full h-1 bg-gray-900 rounded`}
      style={{
        height: '3px',
        ...props.style,
      }}
    />
  )
}

const NavbarToggle = ({ navbar, setNavbar, transition }) => {

  const activeClass = navbar ? 'active' : ''
  
  return (
    <motion.div
      key='navbar'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={transition}
      onClick={setNavbar}
      className={`nav-toggle fixed md:w-16 w-12 z-50 cursor-pointer right-0 lg:mt-20 mt-16
      lg:mr-40 md:mr-24 sm:mr-16 mr-12 ${activeClass}`}
    >
      <Bar
        className="mb-3"
        navbar={navbar}
        variants={{
          open: {
            rotate: -45,
            y: 15,
            backgroundColor: gray100,
          },
        }}
      />
      <Bar
        className="mb-3"
        navbar={navbar}
        variants={{
          open: {},
        }}
      />
      <Bar
        navbar={navbar}
        variants={{
          open: {
            rotate: 45,
            y: -15,
            backgroundColor: gray100,
          },
        }}
      />
    </motion.div>
  )
}

export default NavbarToggle
