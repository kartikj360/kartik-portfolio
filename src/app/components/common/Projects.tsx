"use client";
import SafeImage from './SafeImage';
import { motion } from 'framer-motion';
import ProjectCard from './Project';
import { projects } from '@/app/data/portfolio';

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Projects</motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const slug = slugify(p.title);
            const imageSrc = `/images/projects/${slug}.jpg`;

            return (
              <motion.div key={p.title} className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="relative w-full h-40 bg-gray-100 dark:bg-gray-800">
                  <SafeImage src={imageSrc} fallbackSrc="/file.svg" alt={`${p.title} project screenshot`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <ProjectCard title={p.title} description={p.description} tech={p.tech} github={p.github} demo={p.demo} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


