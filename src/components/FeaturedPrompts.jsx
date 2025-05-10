"use client";

import { useState } from "react";

const mockPrompts = [
  {
    id: "1",
    title: "Creative Story Starter",
    content:
      "Write a story that begins with: 'The sky cracked open like a broken mirror...'",
  },
  {
    id: "2",
    title: "Marketing Copy Prompt",
    content: "Generate a catchy headline for a new eco-friendly shoe brand.",
  },
  {
    id: "3",
    title: "Coding Assistant",
    content: "Explain what closures are in JavaScript with an example.",
  },
  {
    id: "4",
    title: "Mindfulness Prompt",
    content: "List 5 things you're grateful for today and why.",
  },
  {
    id: "5",
    title: "Resume Summary Generator",
    content:
      "Write a professional summary for a resume of a frontend developer with 2 years of experience in React.js.",
  },
  {
    id: "6",
    title: "Startup Pitch Generator",
    content:
      "Create a 2-sentence startup pitch for an app that helps users reduce screen time.",
  },
  {
    id: "7",
    title: "Book Summary Helper",
    content:
      "Summarize the key takeaways from the book 'Atomic Habits' by James Clear in bullet points.",
  },
  {
    id: "8",
    title: "Interview Practice",
    content:
      "Act as a hiring manager and ask me three challenging behavioral questions for a software engineering position.",
  },
  {
    id: "9",
    title: "Blog Idea Generator",
    content:
      "Suggest 5 blog post ideas for a personal development blog targeting millennials.",
  },
];

const FeaturedPrompts = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">
        🔥 Featured Prompts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPrompts.map((prompt) => (
          <div
            key={prompt.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-gray-900 rounded-t-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {prompt.title}
              </h3>
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
            <p className="p-4 text-base text-gray-700 dark:text-gray-300">
              {prompt.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPrompts;
