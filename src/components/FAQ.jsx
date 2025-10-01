"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "What is GeneratePromptAI?",
    answer:
      "GeneratePromptAI helps you craft optimized prompts for AI models instantly.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes! You can start using it for free, with premium features available.",
  },
  {
    question: "Which AI models are supported?",
    answer:
      "It works with ChatGPT, Claude, Gemini, and most major AI platforms.",
  },
  {
    question: "Do I need technical skills?",
    answer: "No coding or AI expertise is required — just enter your idea!",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border border-gray-200 rounded-lg p-4">
                  <DisclosureButton className="flex w-full justify-between items-center text-left text-lg font-medium text-gray-900">
                    {faq.question}
                    <FaChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-gray-600">
                    {faq.answer}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
}
