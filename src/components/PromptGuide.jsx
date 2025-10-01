"use client";
import React from "react";
import { FaPencil, FaBullseye, FaCheckDouble } from "react-icons/fa6";

const steps = [
  {
    title: "Enter Your Idea",
    description:
      "Simply input your task, goal, or a simple prompt. Our tool works with any type of input to create custom AI instructions.",
    icon: FaPencil,
  },
  {
    title: "AI-Powered Enhancements",
    description:
      "Our AI analyzes your input and generates a comprehensive, optimized prompt tailored for various AI models.",
    icon: FaBullseye,
  },
  {
    title: "Usage and Refinement",
    description:
      "You can instantly view the generated prompt. Copy and paste it directly into ChatGPT, Claude, Gemini, or any other AI model.",
    icon: FaCheckDouble,
  },
];

const PromptGuide = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Create Perfect AI Prompts in Seconds
          </h2>
          <p className="text-xl text-gray-600">
            Follow these simple steps to create optimized Prompts for AI models
            in seconds.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex flex-col p-8"
              >
                <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromptGuide;
