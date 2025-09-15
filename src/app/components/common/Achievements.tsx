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
          <motion.div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg font-semibold">Single amino acid variation identification in high resolution tandem mass spectrometry data in bottom up proteomics</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">International Journal of Mass Spectrometry · 2025</p>
          </motion.div>
          
          <motion.div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg font-semibold">Large-scale evaluation of the generalization performance of deep neural networks in tandem mass spectrometry data analysis</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">2nd Scientific Conference of Faculty of Computer Science, National Research University Higher School of Economics · 2024</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Thesis() {
  return (
    <section id="thesis" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Thesis</motion.h2>

        <div className="mt-8">
          <motion.div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-3">Robust and accurate analysis of the data modalities in mass spectrometry</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p><span className="font-medium">Published:</span> HSE University, 2025</p>
              <p><span className="font-medium">Author:</span> Kartik Joshi, Prof. Attila Kertesz-Farkas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}