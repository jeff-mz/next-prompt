"use client";

import { useEffect, useState } from "react";
import { FaCopy, FaCheck, FaSpinner } from "react-icons/fa6";

const FeaturedPrompts = () => {
  const [prompts, setPrompts] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const featuredPrompts = async () => {
      try {
        const result = await window.puter.ai.chat(`
          Return 9 trending AI prompts as a JSON array.
          Each object should include:
          { "id": number, "title": string, "content": string }.
        `);

        const data = JSON.parse(result.message.content);
        setPrompts(data);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    };

    featuredPrompts();
  }, []);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="w-full px-4 py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 dark:text-slate-100 text-center">
          🔥 Featured Prompts
        </h2>

        {prompts.length === 0 ? (
          <div className="flex justify-center py-20">
            <FaSpinner className="text-4xl sm:text-6xl text-indigo-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {prompts.map((prompt) => (
              <div
                key={prompt.id}
                className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              >
                <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                  {/* card header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
                      {prompt.title}
                    </h3>
                  </div>

                  {/* card content */}
                  <p className="mt-2 text-gray-600 dark:text-neutral-400 leading-relaxed">
                    {prompt.content}
                  </p>

                  {/* copy btn */}
                  <button
                    onClick={() => handleCopy(prompt.id, prompt.content)}
                    className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-700 rounded-lg px-3 py-2 hover:bg-indigo-50 dark:hover:bg-indigo-800/50 transition-colors"
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <FaCheck className="text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        Copy to clipboard
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPrompts;
