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


