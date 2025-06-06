import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      // when you have them set up
      await emailjs.sendForm(
        'service_05wfp7s',
        'template_dxd0ali',
        formRef.current!,
        'KeMnEAHfuPvNj02N7'
      );
      
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully!',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitResult({
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 w-32 h-32 border border-primary-200 dark:border-primary-800 rounded-full opacity-20"
      />
      <motion.div
        animate={{
          rotate: -360,
          x: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-24 h-24 border border-secondary-200 dark:border-secondary-800 rounded-lg opacity-20"
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        />
      ))}

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
            Contact Me
          </motion.span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <motion.h3
              whileHover={{ scale: 1.05, x: 10 }}
              className="text-2xl font-semibold mb-6"
            >
              Get In Touch
            </motion.h3>
<motion.p
  variants={itemVariants}
  className="text-dark-600 dark:text-dark-300 mb-8"
>
  Have a project idea or looking to collaborate on something impactful? Let's connect!  
  I'm always excited to explore new opportunities — whether it's full-stack development, AI innovation, or IoT solutions.  
  Feel free to reach out for collaborations, creative brainstorming, or just a good tech conversation.
</motion.p>


            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors"
                >
                  <FiMail className="text-primary-600 dark:text-primary-400 text-xl" />
                </motion.div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-dark-600 dark:text-dark-400">
                    <a href="mailto:john.doe@example.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      premaghosh31@gmail.com
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg mr-4 group-hover:bg-secondary-200 dark:group-hover:bg-secondary-900/50 transition-colors"
                >
                  <FiPhone className="text-secondary-600 dark:text-secondary-400 text-xl" />
                </motion.div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-dark-600 dark:text-dark-400">
                    <a href="tel:+11234567890" className="hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors">
                      +91 9046591533
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg mr-4 group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors"
                >
                  <FiMapPin className="text-accent-600 dark:text-accent-400 text-xl" />
                </motion.div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-dark-600 dark:text-dark-400">
                    Kolkata, India
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              {submitResult && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`p-4 mb-6 rounded-lg ${
                    submitResult.success
                      ? 'bg-success-100 dark:bg-success-900/20 text-success-800 dark:text-success-300'
                      : 'bg-error-100 dark:bg-error-900/20 text-error-800 dark:text-error-300'
                  }`}
                >
                  {submitResult.message}
                </motion.div>
              )}

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 mb-2">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                    borderColor: "rgb(99, 102, 241)",
                  }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    errors.name
                      ? 'border-error-500 dark:border-error-400'
                      : 'border-dark-200 dark:border-dark-700'
                  } bg-white dark:bg-dark-800 focus:outline-none`}
                  placeholder="Enter your full name here"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-error-600 dark:text-error-400 text-sm"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 mb-2">
                  Your Email
                </label>
                <motion.input
                  whileFocus={{
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                    borderColor: "rgb(99, 102, 241)",
                  }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    errors.email
                      ? 'border-error-500 dark:border-error-400'
                      : 'border-dark-200 dark:border-dark-700'
                  } bg-white dark:bg-dark-800 focus:outline-none`}
                  placeholder="Enter your mail ID"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-error-600 dark:text-error-400 text-sm"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="subject" className="block text-dark-700 dark:text-dark-300 mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                    borderColor: "rgb(99, 102, 241)",
                  }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    errors.subject
                      ? 'border-error-500 dark:border-error-400'
                      : 'border-dark-200 dark:border-dark-700'
                  } bg-white dark:bg-dark-800 focus:outline-none`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-error-600 dark:text-error-400 text-sm"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 mb-2">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                    borderColor: "rgb(99, 102, 241)",
                  }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    errors.message
                      ? 'border-error-500 dark:border-error-400'
                      : 'border-dark-200 dark:border-dark-700'
                  } bg-white dark:bg-dark-800 focus:outline-none resize-none`}
                  placeholder="Hello, I'd like to talk about..."
                ></motion.textarea>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-error-600 dark:text-error-400 text-sm"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600"
                  animate={{
                    x: isSubmitting ? ["-100%", "100%"] : "0%",
                  }}
                  transition={{
                    duration: 1,
                    repeat: isSubmitting ? Infinity : 0,
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⏳
                    </motion.span>
                  ) : (
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FiSend />
                    </motion.div>
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </span>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;