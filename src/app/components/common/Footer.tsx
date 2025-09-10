export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-6 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {year} Kartik Joshi. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}


