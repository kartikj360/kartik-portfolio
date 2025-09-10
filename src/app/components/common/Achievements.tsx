"use client";
import { motion } from 'framer-motion';

const achievements = [
  'HSE Gold Scholarship (100% tuition by Russian Federation)',
  'Best Student of Computer Science Department, University of Delhi',
  'Led 50+ member technical society',
  'Organized 15+ tech events and hackathons'
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Achievements</motion.h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {achievements.map((item) => (
            <motion.div key={item} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm text-gray-800 dark:text-gray-200">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Publications() {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Publications</motion.h2>

        <div className="mt-8 grid gap-4">
          {[1, 2].map((idx) => (
            <motion.div key={idx} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-lg font-semibold">Publication Title {idx}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Journal/Conference · Year</p>
              <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}