"use client";
import SafeImage from './SafeImage';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/app/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr] text-left">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400">{personalInfo.location}</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">{personalInfo.name}</h1>
              <p className="mt-2 text-lg sm:text-xl text-gray-700 dark:text-gray-300">{personalInfo.title}</p>
              <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400">{personalInfo.subtitle}</p>
            </div>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden justify-self-center md:justify-self-end ring-4 ring-white/70 dark:ring-gray-800/50">
              <SafeImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/profile.jpg`} fallbackSrc="/file.svg" alt="Portrait of Kartik Joshi" fill sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px" className="object-cover" priority />
            </div>
          </div>

          <motion.div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700 transition-colors">
              <ArrowDown size={16} /> View My Work
            </a>
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume.pdf`} className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-5 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" download>
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div className="mt-6 flex items-center justify-center gap-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <ExternalLink size={16} /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <ExternalLink size={16} /> GitHub
            </a>
            {personalInfo.hseProfile && (
              <a href={personalInfo.hseProfile} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <ExternalLink size={16} /> HSE Profile
              </a>
            )}
            <a href={personalInfo.personal} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <ExternalLink size={16} /> Personal
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}