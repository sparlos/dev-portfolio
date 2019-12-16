import React from "react"

import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

const About = () => {
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <motion.div
          className="md:w-3/6 w-5/6 lg:ml-56 font-sans lg:mt-40 mt-32 mx-auto "
          initial={{
            opacity: 0,
            x: -200,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              mass: 0.5,
            },
          }}
        >
          <h1 className="text-5xl font-normal tracking-widest">About Me</h1>
          <div className="mt-12">
            <p className="mt-6">
              I'm Stephen, a driven young professional looking to enter the
              world of full stack web design & development. I've spent the last
              few years honing my skills in top web technologies including&nbsp;
              <b>
                React, jQuery, SQL, PHP, Node, SASS & SCSS, Bootstrap, VS Code,
                Figma, WordPress, Python, Vue, MongoDB, and GraphQL.&nbsp;
                <a href="#" className="underline">
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
              full-time; I'm open to either local (Toronto area) or remote work.&nbsp;
              <TransitionLink 
                className="font-bold underline"
                to="/contact/"  
              >
                Please reach out to me and I'd love to start a dialogue.
              </TransitionLink>
            </p>
          </div>
        </motion.div>
      )}
    </TransitionState>
  )
}

export default About
