"use client";
import { motion } from 'framer-motion';
type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description?: string;
  bullets?: string[];
  images?: string[];
};

const workExperiences: ExperienceItem[] = [
  {
    role: 'Research Assistant',
    org: 'National Research University — Higher School of Economics',
    period: 'Jan 2024 - Present (1 year 9 months) · Moscow, Russia',
    bullets: [
      'Conducting research in mass spectrometry data analysis and computational proteomics, focusing on advanced data processing techniques.',
      'Working with Pyteomics, machine learning models, and big data frameworks to improve data analysis pipelines.',
      'Developing data-driven solutions for complex biological datasets, ensuring high-quality data preprocessing, feature engineering, and statistical modeling.',
      'Utilizing TensorFlow, PySpark, and Pandas/Seaborn for data visualization, analytics, and model development.',
      'Collaborating with multidisciplinary teams to optimize quantitative analytics workflows.'
    ],
    images: ['hse-1.jpg', 'hse-2.jpg']
  },
  {
    role: 'Centralized Allocation Facilitator',
    org: 'ECA commission of University of Delhi',
    period: 'Oct 2022 - Dec 2022 (3 months) · Delhi, India',
    bullets: [
      'Analyzed and managed data-driven allocation of university extracurricular activities (ECA) seats, optimizing fairness and efficiency.',
      'Utilized Microsoft Excel, Pandas, and Tableau to process and visualize large datasets for decision-making.',
      'Assisted in streamlining the selection process for student activities, ensuring transparency and accuracy.'
    ],
    images: ['eca-1.jpg']
  }
];

const organizationExperiences: ExperienceItem[] = [
  {
    role: 'Vice President',
    org: 'Indian Club HSE',
    period: 'Jul 2024 - Present (1 year 3 months) · Moscow City, Russia',
    bullets: [
      'Coordinating with university administration and the Indian Embassy to organize cultural events promoting diversity and student engagement.',
      'Overseeing student support initiatives for the Indian student community, ensuring seamless communication and problem resolution.',
      'Managing community outreach programs, facilitating networking opportunities, and supporting new students in their academic and social transition.',
      'Leading event planning and execution, fostering collaboration between different student groups and university departments.'
    ],
    images: ['indian-club-1.jpg', 'indian-club-2.jpg', 'indian-club-3.jpg']
  },
  {
    role: 'Member',
    org: 'Indian Club HSE',
    period: 'Nov 2023 - Jul 2024 (9 months) · Moscow City, Russia',
    images: ['indian-club-4.jpg']
  },
  {
    role: 'Writer',
    org: 'Self-employed',
    period: 'Jan 2023 - Present · Remote',
    description: 'Writing research based technical blogs on Medium.',
    images: ['writer-1.jpg']
  },
  {
    role: 'President',
    org: 'Parikalan - Computer Science Society, PGDAV College',
    period: 'Oct 2022 - Jun 2023 (9 months) · India',
    bullets: [
      'Led a team of 50+ members across multiple technical clubs, ensuring seamless execution of initiatives.',
      'Managed and coordinated six specialized clubs under the society, including programming, AI/ML, cybersecurity, and development groups.',
      'Spearheaded the planning and execution of Xenium-2023 (Annual Fest), attracting large participation and industry engagement.',
      'Organized 15+ tech events, workshops, and hackathons, enhancing student learning and exposure to real-world applications.'
    ],
    images: ['parikalan-1.jpg', 'parikalan-2.jpg']
  },
  {
    role: 'Coordinator',
    org: 'Parikalan - Computer Science Society, PGDAV College',
    period: 'Jul 2022 - Sep 2022 (3 months) · India',
    bullets: [
      'Assisted in managing society operations, ensuring smooth coordination between event organizers and faculty.',
      'Facilitated brainstorming sessions and mentored junior members in technical and organizational skills.'
    ],
    images: ['parikalan-3.jpg']
  },
  {
    role: 'Member',
    org: 'Parikalan - Computer Science Society, PGDAV College',
    period: 'Aug 2021 - Jun 2022 (11 months) · Delhi, India',
    images: ['parikalan-4.jpg']
  },
  {
    role: 'Member',
    org: 'TechWhiz - The I.T. Society, PGDAV',
    period: 'Oct 2021 - Jun 2023 (1 year 9 months) · Delhi, India',
    bullets: [
      'Engaged in technical discussions, hackathons, and project collaborations, enhancing hands-on skills in software development and IT solutions.',
      'Assisted in organizing coding competitions, seminars, and workshops focused on emerging technologies.'
    ],
    images: ['techwhiz-1.jpg']
  },
  {
    role: 'Member',
    org: 'Rudra - The Street Play Society',
    period: 'Jan 2021 - Feb 2022 (1 year 2 months) · India',
    bullets: [
      'Participated in theatrical productions, focusing on social issues and expressive storytelling.',
      'Developed skills in public speaking, stage performance, and improvisational acting, contributing to impactful performances.'
    ],
    images: ['rudra-1.jpg']
  },
  {
    role: 'Frontend Web Developer',
    org: 'DSC PGDAV',
    period: 'Jan 2021 - Jan 2022 (1 year 1 month) · New Delhi, India',
    bullets: [
      'Designed and developed interactive web applications using HTML, CSS, and JavaScript.',
      'Contributed to open-source projects and participated in hackathons and collaborative coding sessions.',
      'Strengthened problem-solving abilities through structured coding challenges and real-world project development.'
    ],
    images: ['dsc-1.jpg']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Work Experience</motion.h2>

        <ol className="mt-8 relative border-s border-gray-200 dark:border-gray-800">
          {workExperiences.map((item) => (
            <motion.li key={item.role + item.org} className="mb-10 ms-6" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"></span>
              <h3 className="text-lg font-semibold">{item.role} — {item.org}</h3>
              <time className="block text-sm text-gray-600 dark:text-gray-400">{item.period}</time>
              {item.description && (
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
              )}
              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-3 list-disc ps-5 text-sm text-gray-700 dark:text-gray-300">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {item.images && item.images.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {item.images.slice(0, 3).map((img) => {
                    const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
                    const src = `${base}/images/experience/${img}`;
                    return (
                      <div key={img} className="relative w-full h-24 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={`${item.org} photo`} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = `${base}/file.svg`; }} />
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.li>
          ))}
        </ol>

        <motion.h2 className="mt-14 text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Organizations</motion.h2>

        <ol className="mt-8 relative border-s border-gray-200 dark:border-gray-800">
          {organizationExperiences.map((item) => (
            <motion.li key={item.role + item.org} className="mb-10 ms-6" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"></span>
              <h3 className="text-lg font-semibold">{item.role} — {item.org}</h3>
              <time className="block text-sm text-gray-600 dark:text-gray-400">{item.period}</time>
              {item.description && (
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
              )}
              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-3 list-disc ps-5 text-sm text-gray-700 dark:text-gray-300">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {item.images && item.images.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {item.images.slice(0, 3).map((img) => {
                    const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
                    const src = `${base}/images/organizations/${img}`;
                    return (
                      <div key={img} className="relative w-full h-24 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={`${item.org} photo`} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = `${base}/file.svg`; }} />
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

