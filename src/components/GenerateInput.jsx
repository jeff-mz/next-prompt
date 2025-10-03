"use client";

import { useState } from "react";
import { Field, Label, Description, Textarea } from "@headlessui/react";
import { FaHandSparkles } from "react-icons/fa6";

const GenerateInput = () => {
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState(""); // ✅ new state for status

  const generateHandler = async () => {
    setStatus("⏳ Generating your prompt...");
    setPrompt("");
    try {
      const result = await window.puter.ai.chat(`
        You are an expert prompt engineer.
        Your task is to take the following description and rewrite it into a clear, detailed, and professional AI prompt.
        The prompt should be actionable, unambiguous, and optimized for use with large language models like GPT, Claude, or Gemini.
        Description: ${description}
        Now generate the enhanced professional prompt:
      `);
      setPrompt(result.message.content);
      setStatus("✅ Done!");
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Try again.");
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-slate-100 text-center">
        ✨ Get Your Prompt
      </h2>

      <div className="rounded-xl shadow-lg p-6 py-16 w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
        {/* Input field */}
        <Field className="space-y-2">
          <Label className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Prompt
          </Label>
          <Description className="text-sm text-gray-500 dark:text-gray-400">
            Enter your idea or request below (max 500 characters).
          </Description>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the prompt you want to generate..."
            maxLength={500}
            rows={6}
            className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-900"
          />
          <p className="text-gray-500 dark:text-gray-400 text-sm text-left">
            {description.length}/500
          </p>
        </Field>

        {/* Button */}
        <div className="mt-4">
          <button
            disabled={!description}
            onClick={generateHandler}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <FaHandSparkles className="h-5 w-5" />
            <span>Generate Prompt</span>
          </button>
        </div>

        {/* Result */}
        {status && (
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
            {status}
          </p>
        )}
        {prompt && (
          <div className="mt-4 p-4 bg-slate-100 dark:bg-gray-900 rounded-lg border dark:border-gray-700">
            <p className="whitespace-pre-line text-gray-800 dark:text-gray-200">
              {prompt}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GenerateInput;
