"use client";
import { motion } from 'framer-motion';
type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

const education: EducationItem[] = [
  { degree: 'Master of Science - MS, Data Science and AI', school: 'Higher School of Economics', period: 'Sep 2023 - Sep 2025' },
  { degree: 'Bachelor of Science - BS, Computer Science', school: 'PGDAV College, University of Delhi', period: 'Dec 2020 - Aug 2023' },
  { degree: 'Senior Secondary (Mathematics and Science)', school: "St. Theresa\'s Convent Sr. Sec. School", period: 'Mar 2008 - Mar 2020' }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Education</motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {education.map((e) => (
            <motion.div key={e.degree} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-lg font-semibold">{e.degree}</h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{e.school}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{e.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

