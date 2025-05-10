"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  LogoutLink,
  RegisterLink,
  LoginLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { isAuthenticated, user } = useKindeBrowserClient();

  useEffect(() => {
    const syncUser = async () => {
      try {
        await fetch("/api/sync-user");
      } catch (err) {
        console.error("Failed to sync user:", err);
      }
    };

    if (isAuthenticated) {
      syncUser();
    }
  }, [isAuthenticated]);

  return (
    <header className="shadow-lg px-3 py-2 dark:bg-gray-800 dark:shadow-gray-900">
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-2 lg:px-12 lg:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg xl:text-2xl dark:text-white w-[130px] md:w-[200px]"
        >
          NEXT PROMPT
        </Link>

        {/* Auth Section */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            {/* Desktop View */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/create-post"
                className="bg-indigo-600 text-white font-medium px-5 py-2 rounded-full hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Create Post
              </Link>
              <LogoutLink className="text-gray-700 font-medium px-5 py-2 rounded-full hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200">
                Sign Out
              </LogoutLink>
              <Link href="/profile">
                <img
                  src={
                    user?.picture || "https://avatar.iran.liara.run/public/32"
                  }
                  alt="User profile"
                  className="w-[40px] h-[40px] rounded-full border-2 border-gray-200 dark:border-gray-600"
                />
              </Link>
            </div>

            {/* Mobile Dropdown */}
            <div className="md:hidden relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 p-2 focus:outline-none"
                aria-expanded={showDropdown}
                aria-label="User menu"
              >
                <img
                  src={
                    user?.picture || "https://avatar.iran.liara.run/public/32"
                  }
                  alt="User profile"
                  className="w-[30px] h-[30px] rounded-full border-2 border-gray-200 dark:border-gray-600"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 mt-2 transition-transform dark:text-gray-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 dark:bg-gray-700 dark:shadow-gray-900">
                  <Link
                    href="/profile"
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    View Profile
                  </Link>
                  <Link
                    href="/create-post"
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    Create Post
                  </Link>
                  <LogoutLink
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    Sign Out
                  </LogoutLink>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <LoginLink className="bg-white text-gray-800 font-medium px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200">
              Sign In
            </LoginLink>
            <RegisterLink className="bg-indigo-600 text-white font-medium px-5 py-2 rounded-full hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200">
              Sign Up
            </RegisterLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
