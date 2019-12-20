import React from 'react'

import { motion } from 'framer-motion'

import NavbarItem from './NavbarItem'

const Navbar = ({ toggleNavbar }) => {

  const ulVariants = {
    open: {
      opacity: 1
    },
    closed: {
      opacity: 0
    }
  }

  const items = ['contact', 'projects', 'about', 'home']

  return (
    <motion.div className="text-gray-100 md:text-5xl text-3xl font-sans underline lg:mr-40 md:mr-24 mr-16">
      <motion.ul
        className="text-right md:mt-56 mt-48"
        variants={ulVariants}
        initial="closed"
        animate="open"
      >
        {items.map((item, i) =>
          <NavbarItem key={i} custom={i} label={item} toggleNavbar={toggleNavbar} />
        )}
      </motion.ul>
    </motion.div>
  )
}

export default Navbar