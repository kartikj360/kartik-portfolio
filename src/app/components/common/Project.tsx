import { ExternalLink, Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:text-blue-600">
            <Github size={16} /> Code
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:text-blue-600">
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </div>
  );
}


