import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiUser, FiAward, FiBriefcase } from 'react-icons/fi';
import mePhoto from "../assets/images/prema_professional_pic.jpg";

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-10 w-32 h-32 border border-primary-200 dark:border-primary-800 rounded-full opacity-20"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-10 w-24 h-24 border border-secondary-200 dark:border-secondary-800 rounded-full opacity-20"
      />

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-title mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={floatingAnimation}
              className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl relative"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={mePhoto}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              animate={pulseAnimation}
              className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-primary-500 dark:bg-primary-600 rounded-lg -z-10"
            />
            <motion.div
              animate={{
                ...pulseAnimation,
                transition: { ...pulseAnimation.transition, delay: 1 },
              }}
              className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-secondary-500 dark:bg-secondary-600 rounded-lg -z-10"
            />
          </motion.div>

          <div>
            <motion.p
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-dark-700 dark:text-dark-300 mb-8"
            >
              I'm a final-year B.Tech Computer Science student and aspiring software engineer with a passion for MERN stack development, Generative AI, and Cloud-IoT solutions. I love building intuitive user interfaces and exploring the future of intelligent, connected systems.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                custom={2}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col items-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-900/20"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-3 relative z-10"
                >
                  <FiUser size={20} />
                </motion.div>
                <h3 className="font-medium text-lg mb-1 relative z-10">Academic Year</h3>
                <p className="text-dark-500 dark:text-dark-400 text-center relative z-10">Final Year</p>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col items-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-transparent dark:from-secondary-900/20"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mb-3 relative z-10"
                >
                  <FiBriefcase size={20} />
                </motion.div>
                <h3 className="font-medium text-lg mb-1 relative z-10">Projects</h3>
                <p className="text-dark-500 dark:text-dark-400 text-center relative z-10">10+ Completed</p>
              </motion.div>

              <motion.div
                custom={4}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col items-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent dark:from-accent-900/20"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-3 relative z-10"
                >
                  <FiAward size={20} />
                </motion.div>
                <h3 className="font-medium text-lg mb-1 relative z-10">Degree</h3>
                <p className="text-dark-500 dark:text-dark-400 text-center relative z-10">B.Tech CSE</p>
              </motion.div>
            </div>

            <motion.div
              custom={5}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="/premaresume.pdf"
                download
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline inline-flex items-center gap-2 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-primary-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  whileHover={{ color: "#ffffff" }}
                  className="relative z-10 flex items-center gap-2"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FiDownload />
                  </motion.div>
                  Download Resume
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
