import React from 'react'

import { FaReact, FaJava, FaJs, FaHtml5, FaCss3, FaGithub } from 'react-icons/fa'
import { SiExpress, SiMysql, SiNodedotjs, SiReact, SiRedux } from 'react-icons/si'

import { motion } from 'motion/react'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const TechItem = ({ children, label, duration }) => (
  <motion.div
    variants={iconVariants(duration)}
    initial="initial"
    animate="animate"
    className="relative group rounded-2xl border-4 border-neutral-800 p-4"
  >
    {children}

    {/* Tooltip */}
    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 
        rounded-md bg-neutral-800 text-white text-sm px-2 py-1 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {label}
    </span>
  </motion.div>
)

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >

        <TechItem duration={2.5} label="React">
          <FaReact className="text-7xl text-cyan-500" />
        </TechItem>

        <TechItem duration={4} label="Redux">
          <SiRedux className="text-7xl text-purple-700" />
        </TechItem>

        <TechItem duration={3} label="JavaScript">
          <FaJs className="text-7xl text-yellow-500" />
        </TechItem>

        <TechItem duration={7} label="Java">
          <FaJava className="text-7xl text-red-900" />
        </TechItem>

        <TechItem duration={2} label="Node.js">
          <SiNodedotjs className="text-7xl text-green-500" />
        </TechItem>

        <TechItem duration={1.5} label="Express.js">
          <SiExpress className="text-7xl text-green-500" />
        </TechItem>

        <TechItem duration={7} label="MySQL">
          <SiMysql className="text-7xl text-blue-400" />
        </TechItem>

        <TechItem duration={2} label="HTML5">
          <FaHtml5 className="text-7xl text-orange-500" />
        </TechItem>

        <TechItem duration={5} label="CSS3">
          <FaCss3 className="text-7xl text-blue-500" />
        </TechItem>


        <TechItem duration={7} label="GitHub">
          <FaGithub className="text-7xl text-white" />
        </TechItem>

      </motion.div>
    </div>
  )
}

export default Technologies
