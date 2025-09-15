"use client";
import { motion } from 'framer-motion';

const hobbies = [
  {
    title: "Reading",
    description: "Exploring science fiction, technology, and research papers",
    icon: "📚"
  },
  {
    title: "Cooking",
    description: "Experimenting with different cuisines and flavors",
    icon: "👨‍🍳"
  },
  {
    title: "Swimming",
    description: "Staying fit and enjoying the water",
    icon: "🏊‍♂️"
  },
  {
    title: "Sudoku",
    description: "Solving number puzzles and logical challenges",
    icon: "🔢"
  },
  {
    title: "Ice Skating",
    description: "Gliding on ice and enjoying winter sports",
    icon: "⛸️"
  }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold tracking-tight text-center mb-4" 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          Hobbies & Interests
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Beyond my professional work, I enjoy exploring various activities that keep me balanced and inspired.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <motion.div 
              key={hobby.title}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-3">{hobby.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {hobby.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
