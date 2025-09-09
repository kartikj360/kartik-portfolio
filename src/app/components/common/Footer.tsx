export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Kartik Joshi. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <span className="text-gray-400">|</span>
          <span>Made with ❤️ by Kartik</span>
        </div>
      </div>
    </footer>
  );
}

