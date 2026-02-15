function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Social Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://www.linkedin.com/in/ravatprince/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://api.github.com/users/ravatprince58-lang/repos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="mailto:ravatprince58@gmail.com"
            className="hover:text-red-500 transition"
          >
            Email
          </a>

          <a
            href="https://wa.me/9725230285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Ravat Prince. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
