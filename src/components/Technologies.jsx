import React from 'react'

import { FaReact } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { SiHibernate } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'

import { motion } from 'motion/react'
import { animate } from 'motion'

const iconVariants = (duration) =>({
    initial: { y:-10 },
    animate:{
        y:[10,-10],
        transition : {
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{y:0,opacity:1}}
        initial={{y:-100, opacity:0}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>

        <motion.div 
        whileInView={{x:0, opacity:1}}
        initial={{x:-100, opacity:0}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-7xl text-cyan-500'/>

            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRedux className='text-7xl text-purple-700'/>

            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJs className='text-7xl text-yellow-500'/>

            </motion.div>

            <motion.div 
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl text-red-900 '/>

            </motion.div>

            <motion.div 
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiHibernate className='text-7xl text-yellow-100'/>

            </motion.div>

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoSpringBoot className='text-7xl text-green-500'/>

            </motion.div>

           

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-500'/>

            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3 className='text-7xl text-blue-500'/>

            </motion.div>

            

            <motion.div 
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className='text-7xl text-white'/>

            </motion.div>

           

           

        </motion.div>
      
    </div>
  )
}

export default Technologies
