import React from 'react'

import { motion } from 'framer-motion'

import NavbarItem from './NavbarItem'

const Navbar = () => {

  const ulVariants = {
    open: {
      opacity: 1
    },
    closed: {
      opacity: 0
    }
  }

  const items = ['Projects', 'About', 'Contact']

  return (
    <motion.div className="text-gray-100 text-5xl font-sans underline mr-40">
      <motion.ul
        className="text-right mt-56"
        variants={ulVariants}
        initial="closed"
        animate="open"
      >
        {items.map((item, i) =>
          <NavbarItem key={i} custom={i} label={item} />  
        )}
      </motion.ul>
    </motion.div>
  )
}

export default Navbar