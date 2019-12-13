import React from 'react'

import { motion } from "framer-motion"

const Box = ({ size, position, rotation, custom }) => {
  const boxVariants = {
    visible: i => ({
      opacity: 1,
      rotate: rotation,
      y: 0,
      transition: {
        type: 'spring',
        damping: 300,
        delay: i * 0.1
      }
    }),
    hidden: { opacity: 0, y: 200, rotate: 0 },
  }

  return (
    <motion.div className={`bg-gray-200 w-${size} h-${size} absolute`}
      style={{
        right: position.right,
        top: position.top,
        left: position.left,
        bottom: position.bottom,
        transform: `rotate(${rotation}deg)`,
      }}
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={boxVariants}
    ></motion.div>
  )
}

export default Box