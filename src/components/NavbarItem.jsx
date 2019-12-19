import React from 'react'

import { motion } from 'framer-motion'

const NavbarItem = ({ custom, label }) => {

  const variants = {
    open: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (i + 1) * 0.2,
        type: 'spring',
        damping: 100,
        mass: 1
      }
    }),
    closed: {
      y: 50,
      opacity: 0
    }
  }

  return (
    <motion.li
      className="mb-12"
      variants={variants}
      initial="closed"
      animate="open"
      custom={custom}
    >
      {label}
    </motion.li>
  )

}

export default NavbarItem