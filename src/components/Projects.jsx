import React from 'react'

import { CONTACT, PROJECTS } from '../constants'
import { motion } from 'motion/react'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 '>
    <motion.h1 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:1}}
    className='my-20 text-center text-4xl'>Projects</motion.h1>
       <div>
        {PROJECTS.map((item,i)=>{
            return(
            <div key={i} className=' flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className='w-full mt-5 mb-10 lg:w-1/4'>
                <img width={130} height={130} className='rounded mb-6' src={item.image} alt={item.title}/>
            </motion.div>

            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold' >{item.title}</h6>
                <p className='mb-2 text-neutral-400'>{item.description}</p>

                {item.technologies.map((tech,i)=>{
                    return(
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                    )
                })}

            </motion.div>
            </div>
        )})}
       </div>
            
      
    </div>
  )
}

export default Projects
