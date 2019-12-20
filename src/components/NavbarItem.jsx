import React from 'react'

import { motion } from 'framer-motion'
import TransitionLinkDefault from '../components/TransitionLinkDefault'

const NavbarItem = ({ custom, label, toggleNavbar }) => {
  const variants = {
    open: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (i + 1) * 0.1,
        type: 'spring',
        damping: 100,
        mass: 1,
      },
    }),
    closed: {
      y: 50,
      opacity: 0,
    },
  }

  return (
    <motion.li
      className='mb-12 capitalize'
      variants={variants}
      initial='closed'
      animate='open'
      custom={custom}
    >
      <TransitionLinkDefault
        to={label !== 'home' ? `/${label}` : '/'}
        onClick={() => toggleNavbar()}
      >
        {label}
      </TransitionLinkDefault>
    </motion.li>
  )
}

export default NavbarItem
