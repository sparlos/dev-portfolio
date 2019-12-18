import React from 'react'

import Img from 'gatsby-image'

import { motion, AnimatePresence } from "framer-motion"

const ImageSwitcher = (props) => {
  console.log(props.images)

  return (
    <div>
      {props.activeImage !== null &&
        <AnimatePresence>
          <motion.img
            key={props.activeImage}
            src={props.images[props.activeImage].src}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0, opacity: 1, zIndex: 1
            }}
            exit={{ y: 100, opacity: 0, zIndex: 0 }}
            transition={{
              y: {
                type: "spring",
                damping: 200,
                mass: 1
              }
            }}
          >
          </motion.img>
        </AnimatePresence>
      }
    </div>
  )
}

export default ImageSwitcher