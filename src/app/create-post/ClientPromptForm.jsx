"use client";
import { useState } from "react";

const ClientPromptForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!title || !prompt) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/create-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      const data = await res.json();
      const contentType = res.headers.get("content-type");
      console.log(contentType);

      if (data.success) {
        setMessage("✅ Prompt created successfully!");
        setTitle("");
        setContent("");
      } else {
        setMessage(data.error || "❌ Error creating prompt.");
      }
    } catch (err) {
      setMessage("❌ Something went wrong.");

      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Create a New Prompt
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 md:text-2xl md:mb-4">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full md:min-h-[70px] md:text-lg p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter a prompt title"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 md:text-2xl md:mb-4">
            Prompt Text
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full md:min-h-[200px] md:text-lg p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your prompt here..."
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 md:py-4 md:text-2xl"
        >
          {loading ? "Sending..." : "Create Prompt"}
        </button>

        {message && (
          <p className="mt-4 text-sm text-center text-red-500 dark:text-red-400">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ClientPromptForm;
