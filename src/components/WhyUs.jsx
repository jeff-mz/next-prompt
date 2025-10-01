import React from "react";
import { FaBrain } from "react-icons/fa6";
import { SiTarget, SiZap } from "react-icons/si";

const WhyUs = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose GeneratePromptAI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {/* Card 1 */}
          <div className="group hover:scale-105 transition-transform duration-300 ease-out">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SiZap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Instant Enhancement
                </h3>
                <p className="text-gray-600">
                  Get immediate improvements to your Prompts using advanced AI
                  techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group hover:scale-105 transition-transform duration-300 ease-out">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBrain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Analysis</h3>
                <p className="text-gray-600">
                  Our system analyzes your prompt context and provides optimal
                  suggestions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group hover:scale-105 transition-transform duration-300 ease-out">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SiTarget className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Precision Results
                </h3>
                <p className="text-gray-600">
                  Get accurate and relevant responses from AI with enhanced
                  Prompts.
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
