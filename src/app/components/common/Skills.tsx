"use client";
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = {
    'Programming Languages': [
      'Python (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch)',
      'SQL (Advanced)',
      'R (Intermediate)',
      'C++ (Intermediate)'
    ],
    'Big Data & Cloud': ['PySpark (Advanced)', 'Azure (Hands-on)', 'GCP/AWS (Exposure)'],
    'Data Visualization': ['Tableau', 'Power BI', 'Matplotlib', 'Plotly'],
    'Tools & Technologies': ['GitHub', 'Linux', 'REST API Integration', 'Pyteomics', 'Bioinformatics Tools']
  } as const;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Skills</motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <motion.div key={group} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-lg font-semibold">{group}</h3>
              <ul className="mt-3 grid gap-2">
                {items.map((item) => (
                  <li key={item} className="text-sm text-gray-700 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

