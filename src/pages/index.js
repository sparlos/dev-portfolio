import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { motion } from "framer-motion"

import "./index.scss"

const IndexPage = () => {
  const [selected, setSelected] = useState(null)

  return (
    <Layout selected={selected}>
      <SEO title="Home" />
      <motion.div
        className="heading w-full text-center relative mx-auto font-sans text-gray-900"
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 400,
        }}
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
              <span
                onPointerEnter={() => setSelected(0)}
                onPointerLeave={() => setSelected(null)}
              >
                Projects
              </span>
            </li>
            <li className=" mt-4">
              <span
                onPointerEnter={() => setSelected(1)}
                onPointerLeave={() => setSelected(null)}
              >
                About
              </span>
            </li>
            <li className=" mt-4">
              <span
                onPointerEnter={() => setSelected(2)}
                onPointerLeave={() => setSelected(null)}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </Layout>
  )
}

export default IndexPage
