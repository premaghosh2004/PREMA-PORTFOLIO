import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FiGithub} from 'react-icons/fi';
import projects from '../data/projects';

const Projects: React.FC = () => {
  // No filtering, show all projects directly
  const filteredProjects = projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-40 h-40 border-2 border-dashed border-primary-200 dark:border-primary-800 rounded-full opacity-30"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-10 w-32 h-32 border-2 border-dashed border-secondary-200 dark:border-secondary-800 rounded-full opacity-30"
      />

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-title mb-16"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent bg-300%"
          >
            My Projects
          </motion.span>
        </motion.h2>

        {/* Removed the filter buttons */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                }}
                className="card group relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative overflow-hidden h-52">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay with animated buttons */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    
                    <motion.a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-dark-800 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
                      aria-label="View Source Code"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  </motion.div>

                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </div>

                <div className="p-6 relative z-10">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-semibold mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-3"
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                        }}
                        className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 rounded-md"
                      >
                        +{project.tags.length - 3} more
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
