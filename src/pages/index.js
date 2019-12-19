import React, { useState } from "react"
import { graphql } from "gatsby"

import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { motion } from "framer-motion"

import "./index.scss"

const IndexPage = () => {
  const [selected, setSelected] = useState(null)
  const transitionLength = 0.1

  const variants = {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
      },
    },
    exit: {
      y: 150,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.1,
      },
    },
  }

  return (
    <div>
      <SEO title="Home" />
      <TransitionState>
        {({ transitionStatus, exit, enter }) => {
          return (
            <motion.div
              className="heading w-full text-center relative mx-auto font-sans text-gray-900 h-screen"
              variants={variants}
              initial="exit"
              animate={
                ["entering", "entered", "POP"].includes(transitionStatus)
                  ? "enter"
                  : "exit"
              }
            >
              <div className="heading__text inline-block xl:-mt-6 lg:-mt-4 mt-16 xl:text-7xl lg:text-6xl sm:text-5xl text-4xl">
                <span className="heading__s xl:text-11xl lg:text-10xl sm:text-9xl text-8xl">
                  S
                </span>
                <span className="heading__top">tephen</span>
                <span className="heading__bottom">parling</span>
                <div className="sm:font-thin font-medium text-gray-600 lg:-mt-24 sm:-mt-12 -mt-4 sm:mr-8 text-base sm:text-xl text-right">
                  Fullstack Web Developer & Designer
                </div>
                <ul className="nav font-medium sm:text-right text-center sm:mr-8 mt-8 sm:text-2xl text-xl underline">
                  <li className="">
                  <TransitionLink
                      to="/projects"
                      exit={{
                        length: 0.5,
                      }}
                      entry={{
                        delay: 0.2,
                      }}
                      onPointerEnter={() => setSelected(0)}
                      onPointerLeave={() => setSelected(null)}
                    >
                      Projects
                    </TransitionLink>
                  </li>
                  <li className=" mt-4">
                    <TransitionLink
                      to="/about"
                      exit={{
                        length: 0.5,
                      }}
                      entry={{
                        delay: 0.2,
                      }}
                      onPointerEnter={() => setSelected(1)}
                      onPointerLeave={() => setSelected(null)}
                    >
                      About
                    </TransitionLink>
                  </li>
                  <li className=" mt-4">
                    <TransitionLink
                      to="/contact"
                      exit={{
                        length: 0.5,
                      }}
                      entry={{
                        delay: 0.2,
                      }}
                      onPointerEnter={() => setSelected(2)}
                      onPointerLeave={() => setSelected(null)}
                    >
                      Contact
                    </TransitionLink>
                  </li>
                </ul>
              </div>
            </motion.div>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default IndexPage
