"use client";

import { useState } from "react";
import { Field, Label, Description, Textarea } from "@headlessui/react";
import {
  FaHandSparkles,
  FaRegHeart,
  FaHeart,
  FaRegCopy,
  FaBookmark,
  FaRegBookmark,
  FaSpinner,
} from "react-icons/fa6";

const GenerateInput = () => {
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState("");
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateHandler = async () => {
    setStatus("loading");
    setLiked(false);
    setSaved(false);
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
      setStatus("resolved");
    } catch (error) {
      console.error(error);
      setStatus("rejected");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
          {status === "loading" ? (
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled
            >
              <FaSpinner className="animate-spin h-5 w-5" />
              Processing…
            </button>
          ) : (
            <button
              disabled={!description}
              onClick={generateHandler}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <FaHandSparkles className="h-5 w-5" />
              <span>Generate Prompt</span>
            </button>
          )}
        </div>

        {/* Status */}
        {status === "resolved" && (
          <p className="mt-6 text-left text-gray-700 dark:text-gray-300">
            Enhanced Prompt:
          </p>
        )}
        {status === "rejected" && (
          <p className="mt-6 text-left text-gray-700 dark:text-gray-300">
            Something wen wrong. Please try again!
          </p>
        )}

        {/* result */}
        {prompt && (
          <div className="mt-6 p-6 bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
            <p className="whitespace-pre-line text-gray-800 dark:text-gray-200 mb-4">
              {prompt}
            </p>

            {/*buttons */}
            <div className="flex justify-center gap-6 border-t border-gray-200 dark:border-gray-700 pt-4">
              {/* copy */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FaRegCopy className="h-5 w-5" />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>

              {/* like */}
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 ${
                  liked
                    ? "text-rose-600 dark:text-rose-400"
                    : "text-gray-700 dark:text-gray-300"
                } hover:scale-105 transition-transform`}
              >
                {liked ? (
                  <FaHeart className="h-5 w-5 fill-rose-600" />
                ) : (
                  <FaRegHeart className="h-5 w-5" />
                )}
                <span>{liked ? "Liked" : "Like"}</span>
              </button>

              {/* save */}
              <button
                onClick={() => setSaved(!saved)}
                className={`flex items-center gap-2 ${
                  saved
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                } hover:scale-105 transition-transform`}
              >
                {saved ? (
                  <FaBookmark className="h-5 w-5 fill-indigo-600" />
                ) : (
                  <FaRegBookmark className="h-5 w-5" />
                )}
                <span>{saved ? "Saved" : "Save"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GenerateInput;
