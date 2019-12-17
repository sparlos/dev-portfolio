import React from "react"

import { motion } from "framer-motion"

import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"

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
      y: 0,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.3,
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 100,
      },
    },
  }

  const iconVariants = {
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
    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <motion.div
            className="relative xl:w-4/6 w-5/6 font-sans my-32 mx-auto text-gray-900"
            variants={containerVariants}
            initial="hidden"
            animate={
              ["entering", "entered", "POP"].includes(transitionStatus)
                ? "show"
                : "exit"
            }
          >
            <motion.h1
              variants={headingVariants}
              className="text-5xl sm:text-left font-normal tracking-widest"
            >
              Contact
            </motion.h1>
            <div className="w-full mx-auto bg-gray-200 sm:py-20 py-12 sm:mt-12 mt-6 rounded-lg flex flex-wrap justify-around items-center text-6xl sm:px-10 px-6">
              <motion.div
                variants={iconVariants}
                className="sm:mb-0 mb-6 sm:flex-initial flex-50"
              >
                <FaLinkedin className="mx-auto" />
                <p className="text-sm text-center mt-1 underline">LinkedIn</p>
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="sm:mb-0 mb-6 sm:flex-initial flex-50"
              >
                <FaTwitterSquare className="mx-auto" />
                <p className="text-sm text-center mt-1 underline">Twitter</p>
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="order-first sm:order-none sm:mb-0 mb-6 sm:flex-initial flex-100"
              >
                <FaEnvelopeSquare className="mx-auto" />
                <p className="text-sm text-center mt-1 underline">Email</p>
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="sm:flex-initial flex-50"
              >
                <FaGithubSquare className="mx-auto" />
                <p className="text-sm text-center mt-1 underline">GitHub</p>
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="sm:flex-initial flex-50"
              >
                <FaCodepen className="mx-auto" />
                <p className="text-sm text-center mt-1 underline">CodePen</p>
              </motion.div>
            </div>
            <motion.div
              variants={iconVariants}
              className="mt-8 underline"
            >
              <TransitionLink
                to="/"
                exit={{
                  length: 0.5,
                }}
                entry={{
                  delay: 0.2,
                }}
              >
                Back Home
              </TransitionLink>
            </motion.div>
          </motion.div>
        )
      }}
    </TransitionState>
  )
}

export default contact
