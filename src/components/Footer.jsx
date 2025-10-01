"use client";

import {
  FaEnvelope,
  FaGithub,
  FaLetterboxd,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-10 md:flex md:items-center md:justify-between">
        {/* Brand / Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getUTCFullYear()}{" "}
            <a
              href="https://github.com/jeff-mz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Jafar Mirzapoor
            </a>{" "}
            · All rights reserved
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-6 md:mt-0">
          <a
            href="https://github.com/jeff-mz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition"
          >
            <FaTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
