import React from 'react'

import { motion } from 'framer-motion'

const Box = ({ size, position, rotation, custom, path }) => {
  const boxInitialColor = '#edf2f7'
  const boxHiddenColor = '#f7fafc'

  let randomPosition = Math.floor(Math.random() * 20)
  randomPosition *= Math.floor(Math.random() * 2) === 1 ? 1 : -1

  const boxVariants = {
    visible: i => ({
      backgroundColor: boxInitialColor,
      opacity: 1,
      scale: 1,
      rotate: rotation,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        damping: 300,
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, y: 200, rotate: 0, scale: 1 },
    about: {
      backgroundColor: boxInitialColor,
      opacity: 1,
      scale: 1,
      y: randomPosition,
      x: randomPosition,
      rotate: rotation * 5,
      transition: {
        type: 'spring',
        mass: 5,
        damping: 300,
      },
    },
    contact: {
      backgroundColor: boxHiddenColor,
      opacity: 1,
      rotate: rotation * 5,
      transition: {
        default: {
          type: 'spring',
          mass: 1,
          damping: 300,
        },
      },
    },
  }

  const animation = () => {
    switch (path) {
      case '/about/':
        return 'about'
      case '/contact/':
        return 'contact'
      default:
        return 'visible'
    }
  }

  return (
    <motion.div
      className={`bg-gray-200 w-${size} h-${size} absolute box box--${position}`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      initial='hidden'
      animate={animation()}
      custom={custom}
      variants={boxVariants}
    ></motion.div>
  )
}

export default Box
