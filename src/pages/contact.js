import React from 'react'

import {motion} from 'framer-motion'

const contact = () => {
  return(
    <motion.div 
      className="relative md:w-4/6 w-5/6 font-sans lg:mt-40 mt-32 mx-auto"
      animate={{
        opacity: 1
      }}
      initial={{
        opacity: 0
      }}
    >
      <h1 className="text-5xl font-normal tracking-widest">
        Contact
      </h1>
      <div className="w-full bg-gray-200 h-64 mt-12 rounded-lg">
      </div>
    </motion.div>
  )
}

export default contact