function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full border-t border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
        <span className="block text-center text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
          © {new Date().getUTCFullYear()}{" "}
          <a
            href="https://github.com/jeff-mz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Jafar Mirzapoor
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
