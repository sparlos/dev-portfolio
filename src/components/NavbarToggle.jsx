import React from 'react'
import { motion } from 'framer-motion'

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
      className='absolute w-full h-1 bg-gray-900 rounded'
      style={{
        height: '3px',
        ...props.style,
      }}
    />
  )
}

const NavbarToggle = ({ navbar, setNavbar, transition }) => {
  return (
    <motion.div
      key='navbar'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={transition}
      onClick={setNavbar}
      className={`fixed md:w-16 w-12 md:h-12 h-10 z-50 cursor-pointer right-0 lg:mt-20 mt-16 rounded-full
      lg:mr-40 md:mr-24 sm:mr-16 mr-12`}
    >
      <Bar
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
        style={{ top: 15, zIndex: -1 }}
        navbar={navbar}
        variants={{
          open: {},
        }}
      />
      <Bar
        style={{ top: 30 }}
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
