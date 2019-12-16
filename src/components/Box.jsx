import React, {useState} from 'react'

import { motion } from "framer-motion"

const Box = ({ size, position, rotation, custom, selected }) => {
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
    selected: {
      opacity: 1, rotate: 0, backgroundColor: '#cbd5e0', transition: {
        rotate: {
          type: 'spring',
          velocity: .5
        }
      }
    },
    deselected: {
      opacity: 1, rotate: rotation, backgroundColor: '#edf2f7', transition: {
        rotate: {
          type: 'spring',
          velocity: .5
        }
      }
    },
  }

  const [clean, setClean] = useState(true)

  if(clean && selected) setClean(false)

  const animation = () => {
    if(clean) return 'visible'
    if(!clean && selected) return 'selected'
    if(!clean && !selected) return 'deselected'
  }

  return (
    <motion.div className={`bg-gray-200 w-${size} h-${size} absolute box box--${position}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex: -100
      }}
      initial="hidden"
      animate={animation()}
      custom={custom}
      variants={boxVariants}
    ></motion.div>
  )
}

export default Box