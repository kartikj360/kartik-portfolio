"use client";
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const StatCard = dynamic(() => import('./Stats').then(m => m.StatCard), { ssr: false });

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>About</motion.h2>
        <motion.p className="mt-4 max-w-3xl text-gray-700 dark:text-gray-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Data Scientist with strong expertise in Machine Learning, Deep Learning, and Big Data Analytics. M.S. in Applied Mathematics & Artificial Intelligence (HSE, Moscow) and B.S. in Computer Science (University of Delhi).
        </motion.p>
        <motion.p className="mt-3 max-w-3xl text-gray-700 dark:text-gray-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          At HSE&apos;s Laboratory on AI for Computational Biology, I work on mass spectrometry and proteomics datasets exceeding 10 TB, building ML pipelines and visualization tools that improved peptide database diversity by 40%. End-to-end: preprocessing, feature engineering, model training, and statistical validation with Python, SQL, TensorFlow, PySpark, and R.
        </motion.p>

        <motion.div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          {[
            { label: 'Proteomics data processed', value: '10+ TB' },
            { label: 'ML model accuracy achieved', value: '90%' },
            { label: 'Clean data curated', value: '600+ GB' },
            { label: 'Team members led', value: '50+' },
          ].map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

