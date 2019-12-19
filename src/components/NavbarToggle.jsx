import React, { useState } from 'react'
import { motion } from 'framer-motion'

const gray900 = '#1A202C';
const gray100 = '#F7FAFC';

const Bar = (props) => {

  const transition = {
    type: 'spring',
    damping: 200,
    mass: .2
  }

  return (
    <motion.div
      {...props}
      variants={{
        open: {
          ...props.variants.open,
          transition
        },
        closed: {
          backgroundColor: gray900,
          rotate: 0,
          y: 0,
          transition
        }
      }}
      initial="closed"
      animate={props.navbar ? 'open' : 'closed'}
      className="absolute w-full h-1 bg-gray-900 rounded"
    />
  )
}

const NavbarToggle = ({ navbar, setNavbar }) => {

  return (
    <motion.div
      onClick={setNavbar}
      className={`absolute w-16 h-12 z-50 cursor-pointer right-0 top-0 mt-20 mr-24 rounded-full`}
      initial={{
        rotate: 0
      }}
    // animate={
    //   navbar
    //     ? {
    //       rotate: 180
    //     }
    //     : {
    //       rotate: 0
    //     }
    // }
    >
      <Bar
        navbar={navbar}
        variants={{
          open: {
            rotate: -45,
            y: 20,
            backgroundColor: gray100
          }
        }}
      />
      <Bar
        style={{ top: 20, zIndex: -1 }}
        navbar={navbar}
        variants={{
          open: {
          }
        }}
      />
      <Bar
        style={{ top: 40 }}
        navbar={navbar}
        variants={{
          open: {
            rotate: 45,
            y: -20,
            backgroundColor: gray100
          }
        }}
      />
    </motion.div>
  )
}

export default NavbarToggle