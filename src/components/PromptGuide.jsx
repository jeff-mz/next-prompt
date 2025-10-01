"use client";
import React from "react";
import { FaPencil, FaBullseye, FaCheckDouble } from "react-icons/fa6";

const steps = [
  {
    title: "Enter Your Idea",
    description:
      "Input your task, goal, or simple idea to begin crafting prompts.",
    icon: FaPencil,
  },
  {
    title: "AI-Powered Enhancements",
    description:
      "Our AI analyzes your input and generates optimized prompt suggestions.",
    icon: FaBullseye,
  },
  {
    title: "Usage and Refinement",
    description:
      "Copy, paste, and refine your prompt for ChatGPT, Claude, or Gemini.",
    icon: FaCheckDouble,
  },
];

const PromptGuide = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Create Perfect AI Prompts in Seconds
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Follow these simple steps to craft optimized AI prompts instantly.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02] p-8"
              >
                {/* Step number badge */}
                <div className="absolute -top-5 left-5 bg-indigo-600 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  {`0${index + 1}`}
                </div>

                {/* Icon */}
                <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-6" />

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromptGuide;
