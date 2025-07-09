import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ExperienceTimeline() {
  const experiences = [
    {
      title: "Junior Developer",
      company: "Computer Professionals Inc.",
      date: "Sept 2023 – Jun 2025",
      description:
        "Built and maintained backend services with AWS Lambda & API Gateway while developing Angular modules for responsive web apps. Analyzed cloud logs, automated data tasks, and optimized SQL queries for reporting and validation."
    },
    {
      title: "Document Control Engineer",
      company: "MetroWorks ICT Construction, Inc.",
      date: "Apr 2021 – Jul 2023",
      description:
        "Managed technical documentation for the National Backbone project and led training on the OSS platform. Reviewed partner deliverables and developed a nationwide KMZ library to visualize network infrastructure."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="
            max-w-xl bg-brand-dark text-brand-light
            dark:bg-brand-light/80 dark:text-brand-dark
            p-6 rounded-xl shadow-md mb-6
          "
        >
          <h3 className="text-xl font-bold mb-1">{experiences[activeIndex].title}</h3>
          <p className="text-sm mb-2 font-semibold">
            {experiences[activeIndex].company} • {experiences[activeIndex].date}
          </p>
          <p className="text-sm text-brand-light/80 dark:text-brand-dark/80">
            {experiences[activeIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-4">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              w-4 h-4 rounded-full border-2 
              ${index === activeIndex
                ? "bg-brand-highlight border-brand-highlight"
                : "bg-transparent border-brand-light dark:border-brand-dark"
              }
              transition
            `}
            aria-label={`Show ${exp.title}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
