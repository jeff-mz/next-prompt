import React from "react";
import { FaBrain } from "react-icons/fa6";
import { SiTarget, SiZap } from "react-icons/si";

const WhyUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Choose GeneratePromptAI?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group hover:-translate-y-2 transition-transform duration-300 ease-out">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SiZap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Instant Enhancement
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Get immediate improvements to your prompts using advanced AI
                  techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group hover:-translate-y-2 transition-transform duration-300 ease-out">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBrain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Smart Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our system analyzes your prompt context and provides optimal
                  suggestions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group hover:-translate-y-2 transition-transform duration-300 ease-out">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SiTarget className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Precision Results
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Get accurate and relevant responses from AI with enhanced
                  prompts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
