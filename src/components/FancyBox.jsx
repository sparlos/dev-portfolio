import React from 'react'
import './FancyBox.scss'

import { motion } from "framer-motion"

const FancyBox = ({ custom }) => {
  const boxVariants = {
    visible: i => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 300,
        delay: i * 0.1
      }
    }),
    hidden: { opacity: 0, x: -20, y: -5, rotate: 0 },
  }

  return (
    <motion.div
      className="fancybox bg-gray-900"
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={boxVariants}
    >

    </motion.div>
  )
}

export default FancyBox