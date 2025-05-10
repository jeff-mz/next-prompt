function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="container mx-auto">
        <span className="text-md md:text-lg lg:text-xl  2xl:text-2xl text-gray-500 sm:text-center dark:text-gray-400">
          © {`${new Date().getUTCFullYear()} `}
          <a
            href="https://github.com/jeff-mz"
            target="_blank"
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
