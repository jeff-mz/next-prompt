"use client";

import { useState } from "react";
import { Field, Label, Description, Textarea } from "@headlessui/react";
import { FaHandSparkles } from "react-icons/fa6";

const GenerateInput = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="w-full py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-slate-100 text-center">
        ✨ Get Your Prompt
      </h2>

      <div className="rounded-xl shadow-lg p-6 py-16 w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
        {/* Instructions */}
        <div className="mb-4 p-4 bg-slate-200 dark:bg-gray-700 rounded-lg">
          <p className="text-gray-800 dark:text-gray-100 font-semibold">
            Please describe your prompt clearly and include any specific
            requirements for tone, style, or format.
            <br />
            <span className="font-normal text-gray-700 dark:text-gray-300">
              Example: Write a short motivational tweet in a friendly tone for
              entrepreneurs.
            </span>
          </p>
        </div>

        {/* Input field */}
        <Field className="space-y-2">
          <Label className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Prompt
          </Label>
          <Description className="text-sm text-gray-500 dark:text-gray-400">
            Enter your idea or request below (max 500 characters).
          </Description>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the prompt you want to generate..."
            maxLength={500}
            rows={6}
            className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-900"
          />
          <p className="text-gray-500 dark:text-gray-400 text-sm text-left">
            {prompt.length}/500
          </p>
        </Field>

        {/* Button */}
        <div className="mt-4">
          <button
            disabled={!prompt}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <FaHandSparkles className="h-5 w-5" />
            <span>Generate Prompt</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GenerateInput;
