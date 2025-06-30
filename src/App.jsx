import React from 'react';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="py-32 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">👋 Hey, I'm Adriane</h1>
        <p className="text-2xl max-w-xl mx-auto leading-relaxed">
          Junior Developer & Cybersecurity Learner
        </p>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 max-w-6xl mx-auto px-4"
      >
        <section className="py-20 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">🚀 Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">My Notes App</h3>
                <p className="mb-4 text-gray-600">Node.js + Angular app that is Notion-like</p>
                <a
                  href="https://apmquiros.github.io/my-notes-app/"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Add more project cards here */}
          </div>
        </section>
      </motion.section>
    
      <section className="py-20 bg-gray-200 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">🙋 About Me</h2>
        <p>Detail-oriented junior dev with a background in full-stack dev & cybersecurity.</p>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">📬 Contact</h2>
        <p>adrianepatrickquiros@gmail.com</p>
        <div className="mt-4">
          <a href="https://github.com/apmquiros" className="text-indigo-600 underline mr-4">GitHub</a>
          <a href="https://linkedin.com/in/adrianequiros" className="text-indigo-600 underline">LinkedIn</a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; 2025 Adriane Patrick Quiros
      </footer>
    </div>
  );
}

export default App;