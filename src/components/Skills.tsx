import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import skills from '../data/skills';

const Skills: React.FC = () => {
  // Dynamic icon mapping function
  const getIcon = (iconName: string) => {
    const iconSize = 28;
    
    if (iconName.startsWith('Fa')) {
      // @ts-ignore
      const Icon = FaIcons[iconName];
      return Icon ? <Icon size={iconSize} /> : null;
    } else if (iconName.startsWith('Si')) {
      // @ts-ignore
      const Icon = SiIcons[iconName];
      return Icon ? <Icon size={iconSize} /> : null;
    } else if (iconName.startsWith('Ai')) {
      // @ts-ignore
      const Icon = AiIcons[iconName];
      return Icon ? <Icon size={iconSize} /> : null;
    }
    return null;
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="section bg-dark-100/50 dark:bg-dark-900/50 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

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
            className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent bg-300% animate-gradient"
          >
            My Skills
          </motion.span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                z: 50,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-primary-900/10 dark:via-secondary-900/10 dark:to-accent-900/10"
                initial={{ scale: 0, rotate: 45 }}
                whileHover={{ scale: 1.5, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.5 }}
                    className="mr-3 text-primary-600 dark:text-primary-400"
                  >
                    {getIcon(skill.icon)}
                  </motion.div>
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-medium"
                  >
                    {skill.name}
                  </motion.h3>
                </div>

                <div className="progress-bar mb-2 relative overflow-hidden">
                  <motion.div
                    custom={skill.level}
                    variants={progressVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="progress-bar-fill relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>
                </div>

                <div className="flex justify-between text-sm text-dark-500 dark:text-dark-400">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Proficiency
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="font-medium"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>

              {/* Floating particles on hover */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;