import React from "react"

import { motion } from "framer-motion"

import {
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelopeSquare,
  FaGithubSquare,
  FaCodepen,
} from "react-icons/fa"

const contact = () => {
  const containerVariants = {
    show: {
      opacity: 1,
      scaleX: 1,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.3,
        delayChildren: 0.4,
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
  }

  const headingVariants = {
    hidden: {opacity: 0, x: -30},
    show: {opacity: 1, x: 0, transition: {
      type: 'spring',
      damping: 100
    }}
  }

  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: {
      type: 'spring',
      damping: 100
    } },
  }

  return (
    <motion.div
      className="relative xl:w-4/6 w-5/6 font-sans my-32 mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={headingVariants}
        className="text-5xl font-normal tracking-widest"
      >
        Contact
      </motion.h1>
      <div className="w-full bg-gray-200 py-20 mt-12 rounded-lg flex flex-wrap justify-around items-center text-6xl px-10">
        <motion.div variants={iconVariants}>
          <FaLinkedin />
          <p className="text-sm text-center mt-1 underline">LinkedIn</p>
        </motion.div>
        <motion.div variants={iconVariants}>
          <FaTwitterSquare />
          <p className="text-sm text-center mt-1 underline">Twitter</p>
        </motion.div>
        <motion.div variants={iconVariants}>
          <FaEnvelopeSquare />
          <p className="text-sm text-center mt-1 underline">Email</p>
        </motion.div>
        <motion.div variants={iconVariants}>
          <FaGithubSquare />
          <p className="text-sm text-center mt-1 underline">GitHub</p>
        </motion.div>
        <motion.div variants={iconVariants}>
          <FaCodepen />
          <p className="text-sm text-center mt-1 underline">CodePen</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default contact
