import React from "react"

import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

const About = () => {
  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
      y: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        y: {
          from: 0,
        },
        type: "spring",
        mass: 1,
        damping: 50,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 50,
      },
    },
  }

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <motion.div
          className="xl:w-3/6 lg:w-4/6 w-5/6 lg:ml-56 font-sans xl:my-32 lg:my-20 my-32 pb-32 mx-auto"
          variants={variants}
          initial="hidden"
          animate={
            ["entering", "entered", "POP"].includes(transitionStatus)
              ? "show"
              : "exit"
          }
        >
          <h1 className="text-5xl font-normal tracking-widest">About</h1>
          <div className="mt-12 md:leading-relaxed">
            <p className="mt-6">
              I'm Stephen, a driven young professional looking to enter the
              world of full stack web design & development. I've spent the last
              few years honing my skills in top web technologies including&nbsp;
              <b>
                React, jQuery, SQL, PHP, Node, SASS & SCSS, Bootstrap, VS Code,
                Figma, WordPress, Python, Vue, MongoDB, and GraphQL.&nbsp;
                <a href="#" className="link">
                  You can find my full CV here.
                </a>
              </b>
            </p>
            <p className="mt-6">
              At my last job, I worked within a large team of other sales
              associates and multiple managers. I gained a lot of valuable
              experience pertaining to&nbsp;
              <b>
                communication, teamwork, meeting the varied expectations of
                multiple people, and achieving goals on a deadline.
              </b>
            </p>
            <p className="mt-6">
              <b>
                I'm hardworking, receptive and unrelenting when it comes to
                doing the very best that I can.&nbsp;
              </b>
              This is demonstrated by my 4 year study at York University,
              culminating in a Bachelor of Fine Arts with Honours. I was awarded
              a <b>Magna Cum Laude</b> for my efforts across those 4 years.
            </p>
            <p className="mt-6">
              If all of this sounds good to you, I'm ready to work. Preferably
              full-time; I'm open to either local (Toronto area) or remote
              work.&nbsp;
              <TransitionLink
                className="font-bold link"
                to="/contact/"
                exit={{
                  length: 0.5,
                }}
                entry={{
                  delay: 0.2,
                }}
              >
                Please reach out to me and I'd love to start a dialogue.
              </TransitionLink>
            </p>
            <p className="mt-10">
              <TransitionLink
                className="link"
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
            </p>
          </div>
        </motion.div>
      )}
    </TransitionState>
  )
}

export default About
