import React from 'react';
import { motion } from "framer-motion";
import DarkModeToggle from './DarkModeToggle';

function App() {
  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light">
      <DarkModeToggle />

      {/* Hero Section */}
      <section className="py-32 text-center bg-gradient-to-r from-brand-darker to-brand-dark dark:from-brand-dark dark:to-brand-accent text-brand-light">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">Hey, I'm Adriane</h1>
        <p className="text-2xl max-w-xl mx-auto leading-relaxed">
          Junior Developer & Cybersecurity Learner
        </p>
      </section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          py-20 max-w-6xl mx-auto px-4
          bg-brand-light text-brand-dark
          dark:bg-brand-darker dark:text-brand-light
        "
      >
        <h2 className="text-4xl font-bold mb-12 text-brand-highlight text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card */}
          <div className="
            bg-brand-dark text-brand-light
            dark:bg-brand-light/80 dark:text-brand-dark
            rounded-xl shadow-md hover:shadow-xl 
            transform hover:-translate-y-1 transition-all duration-300
          ">
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
          </div>
          {/* Add more project cards here */}
        </div>
      </motion.section>

      {/* About Me Section */}
      <section className="py-20 bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-brand-highlight">About Me</h2>
        <p>Detail-oriented junior dev with a background in full-stack dev & cybersecurity.</p>
      </section>

      {/* Contact Section */}
      <section className="py-20 text-center bg-brand-light dark:bg-brand-darker text-brand-dark dark:text-brand-light">
        <h2 className="text-3xl font-bold mb-4 text-brand-highlight">Contact</h2>
        <p>adrianepatrickquiros@gmail.com</p>
        <div className="mt-4">
          <a href="https://github.com/apmquiros" className="text-brand-accent dark:text-brand-light/50 underline mr-4">GitHub</a>
          <a href="https://linkedin.com/in/adrianequiros" className="text-brand-accent dark:text-brand-light/50 underline">LinkedIn</a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-brand-dark dark:text-brand-light/60">
        &copy; 2025 Adriane Patrick Quiros
      </footer>
    </div>
  );
}

export default App;