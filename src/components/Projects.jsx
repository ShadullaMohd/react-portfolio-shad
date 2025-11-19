import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((item, i) => (
          <div key={i} className="flex flex-wrap lg:justify-center mb-16">
            
            {/* Image Section */}
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full mt-5 mb-10 lg:w-1/4 block"
            >
              <img
                width={130}
                height={130}
                className="rounded mb-6 hover:scale-105 transition-transform duration-300 shadow-lg"
                src={item.image}
                alt={item.title}
              />
            </motion.a>

            {/* Text Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* Title */}
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <h6 className="mb-2 font-semibold hover:text-purple-400 transition-colors">
                  {item.title}
                </h6>
              </a>

              {/* Description */}
              <p className="mb-3 text-neutral-400">{item.description}</p>

              {/* Visible Link */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 text-purple-400 underline hover:text-purple-300 transition-colors"
              >
                🔗 View Project
              </a>

              {/* Technologies */}
              <div className="flex flex-wrap">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
