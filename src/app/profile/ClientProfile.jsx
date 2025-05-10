"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const ClientProfile = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState(null);
  const path = usePathname();
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const res = await fetch("/api/user-prompts");
        const data = await res.json();
        if (res.ok) {
          setPrompts(data);
        } else {
          console.error(data.error || "Error fetching prompts");
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  const handleCopy = (promptId, content) => {
    navigator.clipboard.writeText(content);
    setCopiedId(promptId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl lg:text-3xl xl:text-5xl font-semibold mb-8 dark:text-white">
        Your Prompts
      </h1>

      {loading ? (
        <p className="text-lg dark:text-gray-300">Loading...</p>
      ) : prompts.length === 0 ? (
        <p className="text-lg dark:text-gray-300">
          You haven’t created any prompts yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {prompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between p-4 bg-slate-100 dark:bg-gray-900 rounded-t-lg">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {prompt.title}
                </h5>

                {/* copy button */}
                <button
                  onClick={() => handleCopy(prompt.id, prompt.content)}
                  className="flex items-center gap-2 text-xs font-medium rounded-lg border px-3 py-1.5 
             border-gray-300 dark:border-gray-600 
             bg-white dark:bg-gray-800 
             text-gray-700 dark:text-gray-200 
             hover:bg-gray-100 dark:hover:bg-gray-700 
             transition-colors duration-150"
                >
                  {copiedId === prompt.id ? (
                    <>
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="md:text-base">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="md:text-base">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="p-4 text-sm text-gray-600 dark:text-gray-300">
                {prompt.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientProfile;
