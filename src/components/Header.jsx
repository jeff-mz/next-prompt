"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  // load theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  // update theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="shadow-md border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <nav className="flex items-center justify-between mx-auto max-w-7xl px-4 py-3 sm:px-6 md:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
          >
            NEXT PROMPT
          </Link>

          <button
            onClick={toggleTheme}
            className="ml-2 text-xl hover:scale-110 transition-transform"
            title="Toggle theme"
          >
            {theme === "light" ? "🌙" : "🔆"}
          </button>
        </div>
      </nav>
    </header>
  );
}
