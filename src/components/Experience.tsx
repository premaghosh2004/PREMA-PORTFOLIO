import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook } from 'react-icons/fi';
import { experiences, education } from '../data/experience';

const Experience: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="experience" className="section bg-dark-100/50 dark:bg-dark-900/50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
          x: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-24 h-24 border border-primary-300 dark:border-primary-700 rounded-lg opacity-20"
      />
      <motion.div
        animate={{
          rotate: -360,
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-20 h-20 border border-secondary-300 dark:border-secondary-700 rounded-full opacity-20"
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
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent bg-300%"
          >
            Experience & Education
          </motion.span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-3"
              >
                <FiBriefcase className="text-primary-600 dark:text-primary-400 text-xl" />
              </motion.div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 relative"
            >
              {/* Animated timeline */}
              <motion.div
                variants={timelineVariants}
                className="absolute left-3.5 top-0 h-full w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 origin-top"
              />

              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={item}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                  }}
                  className="relative pl-10"
                >
                  <motion.div
                    variants={dotVariants}
                    whileHover={{
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
                    }}
                    className="absolute left-0 top-1 w-7 h-7 bg-white dark:bg-dark-800 border-2 border-primary-500 dark:border-primary-600 rounded-full z-10 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="w-2 h-2 bg-primary-500 rounded-full"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm relative overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/50 dark:from-primary-900/10 dark:to-secondary-900/10"
                      initial={{ scale: 0, rotate: 45 }}
                      whileHover={{ scale: 1.5, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.h4
                        whileHover={{ x: 5 }}
                        className="text-xl font-medium text-dark-900 dark:text-dark-100 mb-1"
                      >
                        {experience.role}
                      </motion.h4>
                      <motion.p
                        whileHover={{ x: 5 }}
                        className="text-primary-600 dark:text-primary-400 font-medium mb-2"
                      >
                        {experience.company}
                      </motion.p>
                      <motion.p
                        whileHover={{ x: 5 }}
                        className="text-dark-500 dark:text-dark-400 mb-4 text-sm"
                      >
                        {experience.duration}
                      </motion.p>
                      <ul className="space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="text-dark-600 dark:text-dark-300 flex"
                          >
                            <motion.span
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: itemIndex * 0.3,
                              }}
                              className="mr-2 text-primary-500"
                            >
                              •
                            </motion.span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg mr-3"
              >
                <FiBook className="text-secondary-600 dark:text-secondary-400 text-xl" />
              </motion.div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 relative"
            >
              {/* Animated timeline */}
              <motion.div
                variants={timelineVariants}
                className="absolute left-3.5 top-0 h-full w-0.5 bg-gradient-to-b from-secondary-500 via-accent-500 to-primary-500 origin-top"
              />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={item}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                  }}
                  className="relative pl-10"
                >
                  <motion.div
                    variants={dotVariants}
                    whileHover={{
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(20, 184, 166, 0.5)",
                    }}
                    className="absolute left-0 top-1 w-7 h-7 bg-white dark:bg-dark-800 border-2 border-secondary-500 dark:border-secondary-600 rounded-full z-10 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="w-2 h-2 bg-secondary-500 rounded-full"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm relative overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-secondary-50/50 via-transparent to-accent-50/50 dark:from-secondary-900/10 dark:to-accent-900/10"
                      initial={{ scale: 0, rotate: 45 }}
                      whileHover={{ scale: 1.5, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.h4
                        whileHover={{ x: 5 }}
                        className="text-xl font-medium text-dark-900 dark:text-dark-100 mb-1"
                      >
                        {edu.degree}
                      </motion.h4>
                      <motion.p
                        whileHover={{ x: 5 }}
                        className="text-secondary-600 dark:text-secondary-400 font-medium mb-2"
                      >
                        {edu.institution}
                      </motion.p>
                      <motion.p
                        whileHover={{ x: 5 }}
                        className="text-dark-500 dark:text-dark-400 mb-4 text-sm"
                      >
                        {edu.duration}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, x: 5 }}
                        className="text-dark-600 dark:text-dark-300"
                      >
                        {edu.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;