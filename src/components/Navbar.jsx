import React from 'react'

import { motion } from 'framer-motion'

import NavbarItem from './NavbarItem'

const Navbar = ({ toggleNavbar }) => {
  const ulVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  }

  const items = ['projects', 'contact', 'about', 'home']

  return (
    <motion.div className='text-gray-100 xl:text-5xl lg:text-4xl text-3xl font-sans underline lg:mr-40 md:mr-24 mr-16'>
      <motion.ul
        className='text-right xl:mt-48 mt-40'
        variants={ulVariants}
        initial='closed'
        animate='open'
      >
        {items.map((item, i) => (
          <NavbarItem
            key={i}
            custom={i}
            label={item}
            toggleNavbar={toggleNavbar}
          />
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default Navbar
