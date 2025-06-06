import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';
import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from 'react-icons/si';
import navItems from '../data/navItems';
import socials from '../data/socials';

const Footer: React.FC = () => {
  // Dynamic icon mapping function
  const getIcon = (iconName: string) => {
    const iconSize = 20;
    
    if (iconName === 'FaGithub') return <SiGithub size={iconSize} />;
    if (iconName === 'FaLinkedinIn') return <SiLinkedin size={iconSize} />;
    if (iconName === 'FaXTwitter') return <SiTwitter size={iconSize} />;
    if (iconName === 'FaInstagram') return <SiInstagram size={iconSize} />;
    if (iconName === 'MdEmail') return <MdIcons.MdEmail size={iconSize} />;
    
    if (iconName.startsWith('Fa')) {
      // @ts-ignore
      const Icon = FaIcons[iconName];
      return Icon ? <Icon size={iconSize} /> : null;
    } else if (iconName.startsWith('Fi')) {
      // @ts-ignore
      const Icon = FiIcons[iconName];
      return Icon ? <Icon size={iconSize} /> : null;
    } else if (iconName.startsWith('Md')) {
      // @ts-ignore
      const Icon = MdIcons[iconName];
      return Icon ? <Icon size={iconSize} /> : null;
    }
    return null;
  };

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialVariants = {
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
    <footer className="bg-dark-900 text-white pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <motion.div variants={itemVariants}>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold mb-4 text-white"
            >
              Prema Ghosh
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-dark-300 mb-6 max-w-xs"
            >
              A passionate Computer Science student crafting digital experiences and building the future through code.
            </motion.p>
            <motion.div
              variants={containerVariants}
              className="flex space-x-4"
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-dark-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                  aria-label={social.name}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {getIcon(social.icon)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold mb-4 text-white"
            >
              Quick Links
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer block py-1 relative group"
                  >
                    <span className="relative z-10">{item.title}</span>
                    <motion.div
                      className="absolute inset-0 bg-primary-600/20 rounded-md -z-10"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold mb-4 text-white"
            >
              Contact Info
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-4">
              <motion.li
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiIcons.FiMapPin className="text-primary-400 mt-1 mr-3" />
                </motion.div>
                <span className="text-dark-300">Kolkata, India</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiIcons.FiMail className="text-primary-400 mt-1 mr-3" />
                </motion.div>
                <a href="mailto:john.doe@example.com" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  premaghosh31@gmail.com
                </a>
              </motion.li>
              <motion.li
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiIcons.FiPhone className="text-primary-400 mt-1 mr-3" />
                </motion.div>
                <a href="tel:+11234567890" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  +91 9046591533
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-dark-800 py-6 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-dark-400 text-center md:text-left mb-4 md:mb-0"
          >
            © {currentYear} Prema Ghosh. All rights reserved.
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-dark-400 text-center md:text-right"
          >
            Designed & Built with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-error-500"
            >
              ❤
            </motion.span>{' '}
            by Prema Ghosh
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;