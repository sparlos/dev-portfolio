import React from 'react'
import { motion } from "framer-motion"

const Icon = ({ href, linkTitle, customClasses, children }) => {

  const variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 100,
      },
    },
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      variants={variants}
      className={`${customClasses} sm:flex-initial transition-color hover:text-teal-500`}
    >
      {children}
      <p className="text-sm text-center mt-1 underline">{linkTitle}</p>
    </motion.a>
  )
}

export default Icon