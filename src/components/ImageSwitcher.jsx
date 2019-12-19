import React from 'react'

import { motion, AnimatePresence } from "framer-motion"
import './ImageSwitcher.scss'

const ImageSwitcher = ({ activeImage, images }) => {

  return (
    <div>
      {activeImage !== null &&
        <div className="image-switcher lg:block hidden">
          <AnimatePresence>
            <motion.img
              className="image-switcher__image"
              key={activeImage}
              src={images[activeImage].src}
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
        </div>
      }
    </div>
  )
}

export default ImageSwitcher