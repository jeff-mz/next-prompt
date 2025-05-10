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

    if (isAuthenticated) syncUser();
  }, [isAuthenticated]);

  return (
    <header className="shadow-md bg-white dark:bg-gray-800 dark:shadow-gray-900">
      <nav className="flex items-center justify-between mx-auto max-w-7xl px-4 py-3 sm:px-6 md:px-8 lg:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl md:text-2xl"
        >
          NEXT PROMPT
        </Link>

        {/* Auth Section */}
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/create-post"
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 md:px-5 md:text-base"
              >
                Create Post
              </Link>
              <LogoutLink className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 md:px-5 md:text-base">
                Sign Out
              </LogoutLink>
              <Link href="/profile">
                <img
                  src={
                    user?.picture || "https://avatar.iran.liara.run/public/32"
                  }
                  alt="User profile"
                  className="h-9 w-9 rounded-full border-2 border-gray-200 dark:border-gray-600"
                />
              </Link>
            </div>

            {/* Mobile Dropdown */}
            <div className="relative md:hidden">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 p-1 focus:outline-none"
              >
                <img
                  src={
                    user?.picture || "https://avatar.iran.liara.run/public/32"
                  }
                  alt="User profile"
                  className="h-8 w-8 rounded-full border-2 border-gray-200 dark:border-gray-600"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform dark:text-gray-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 14.121l-6.364-6.364-1.414 1.414L12 16.95l7.778-7.778-1.414-1.414z"
                  />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-44 rounded-md bg-white py-2 shadow-lg dark:bg-gray-700 dark:shadow-gray-900 z-50">
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
            <LoginLink className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 sm:px-5 md:text-base">
              Sign In
            </LoginLink>
            <RegisterLink className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 sm:px-5 md:text-base">
              Sign Up
            </RegisterLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
