import profilePic from '../assets/prifile2.jpg'
import React from 'react'
import { HERO_CONTENT } from '../constants'
import { motion } from "motion/react"

const container = (delay) =>({
  hidden: {x:-100, opacity:0},
  visible : {
    x:0,
    opacity:1,
    transition: {duration:0.5, delay:delay}
  },
})

const Hero = () => {
  return (
    <div className=' border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className=' flex flex-wrap'>
            <div className=' w-full lg:w-1/2'>
                 <div className='flex flex-col items-center lg:items-start'>
                     <motion.h1 
                     variants={container(0)}
                     initial="hidden"
                     animate="visible"
                       className=' text-6xl font-thin tracking-tight lg:mb-10 lg:text-8xl' >Shadulla Mohammd</motion.h1>
                     <motion.span 
                     variants={container(0.5)}
                     initial="hidden"
                     animate="visible"

                      className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-transparent text-4xl tracking-tight'>Full Stack Developer</motion.span>
                     <motion.p 
                     variants={container(1)}
                     initial="hidden"
                     animate="visible"
                      className='my-2 py-6 max-w-xl font-light tracking-tight'>{HERO_CONTENT}</motion.p>

                </div>


             </div>

             <div className='w-full lg:w-1/2 lg:p-20'>
                <div className='flex justify-center'>
                    <motion.img 
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1, delay:1.2}}
                     className=' mix-blend-900 rounded-2xl' width={350} height={350} src={profilePic} alt="shad-img"/>

                </div>

             </div>

         </div>
      
    </div>
  )
}

export default Hero
