import React from 'react';
import { motion } from "framer-motion";
import DarkModeToggle from './DarkModeToggle';

function App() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <header className="
        fixed top-0 w-full z-50
        bg-gradient-to-r from-brand-darker to-brand-dark 
        dark:from-brand-dark dark:to-brand-accent text-brand-light
        flex justify-between items-center
        px-8 py-4 shadow
      ">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Adriane Quiros Logo" className="h-10 w-auto" />
          <span className="sr-only">Adriane Quiros Portfolio</span>
        </a>
        <DarkModeToggle />
      </header>

      <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light">

        {/* Hero Section */}
        <section className="py-32 text-center bg-gradient-to-r from-brand-darker to-brand-dark dark:from-brand-dark dark:to-brand-accent text-brand-light">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold"
          >
            Hey, I'm Adriane
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl max-w-xl mx-auto leading-relaxed mt-4"
          >
            Junior Developer & Cybersecurity Learner
          </motion.p>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-brand-light dark:bg-brand-dark  text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-brand-highlight text-center">Projects</h2>
          <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-20 max-w-6xl mx-auto px-4"
          >
            <motion.div
              variants={container}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {/* my-notes-app card */}
              <motion.div
                variants={item}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="
                  bg-brand-dark text-brand-light
                  dark:bg-brand-light/80 dark:text-brand-dark
                  rounded-xl 
                  shadow-md dark:shadow-none 
                  dark:drop-shadow-[0_0_8px_rgba(249,249,249,0.1)]
                  transition-shadow duration-300
                "
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">My Notes App</h3>
                  <p className="mb-4 text-brand-light/80 dark:text-brand-dark/80">Node.js + Angular app that is Notion-like</p>
                  <a
                    href="https://apmquiros.github.io/my-notes-app/"
                    className="font-semibold hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>

              {/* log-analyzer card */}
              <motion.div
                variants={item}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="
                  bg-brand-dark text-brand-light
                  dark:bg-brand-light/80 dark:text-brand-dark
                  rounded-xl 
                  shadow-md dark:shadow-none 
                  dark:drop-shadow-[0_0_8px_rgba(249,249,249,0.1)]
                  transition-shadow duration-300
                "
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Log Analyzer</h3>
                  <p className="mb-4 text-brand-light/80 dark:text-brand-dark/80">Python Flask log analyzer dashboard.</p>
                  <a
                    href="https://log-analyzer-enuz.onrender.com/"
                    className="font-semibold hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>

            </motion.div>
          </motion.section>
        </section>

        {/* About Me Section */}
        <section className="py-20 bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-brand-highlight">About Me</h2>
          <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          >Detail-oriented junior dev with a background in full-stack dev & cybersecurity.</motion.p>
        </section>

        {/* Contact Section */}
        <section className="py-20 text-center bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light">
          <h2 className="text-3xl font-bold mb-4 text-brand-highlight">Contact</h2>
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>adrianepatrickquiros@gmail.com</p>
            <div className="mt-4">
              <a href="https://github.com/apmquiros" className="text-brand-accent dark:text-brand-light/50 underline mr-4">GitHub</a>
              <a href="https://linkedin.com/in/adrianequiros" className="text-brand-accent dark:text-brand-light/50 underline">LinkedIn</a>
            </div>
          </motion.section>
          
        </section>

        <footer className="py-6 text-center text-sm text-brand-dark dark:text-brand-light/60">
          &copy; 2025 Adriane Patrick Quiros
        </footer>
      </div>
    </div>
  );
}

export default App;