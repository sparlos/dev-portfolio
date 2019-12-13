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
        initial={{y: 150, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{
          type: 'spring',
          damping: 400
        }}
      >
        <div className="heading__text inline-block">
          <span className="heading__s lg:text-11xl">S</span>
          <span className="heading__top lg:text-7xl">tephen</span>
          <span className="heading__bottom lg:text-7xl">parling</span>
          <div className="font-thin text-gray-600 -mt-24 mr-8 text-xl text-right">
            Fullstack Web Developer & Designer
          </div>
          <ul className="nav font-medium text-right mr-8 mt-8 text-2xl underline">
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
