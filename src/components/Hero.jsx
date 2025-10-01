import { SiRobotframework } from "react-icons/si";

const Hero = () => {
  return (
    <section className="w-full mx-auto py-12 md:py-20 2xl:py-28 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Icon */}
        <SiRobotframework className="mx-auto h-20 w-20 text-indigo-600 dark:text-indigo-400 animate-bounce" />

        {/* Heading */}
        <h1 className="mt-6 mb-6 text-4xl font-bold tracking-tight text-indigo-900 dark:text-white md:text-5xl lg:text-6xl xl:text-7xl leading-snug">
          Discover & Share
          <br />
          <span className="underline underline-offset-4 decoration-8 decoration-indigo-500 dark:decoration-indigo-600">
            AI-based Prompts
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Generate powerful, optimized prompts for ChatGPT, Claude, Gemini, and
          more. Enhance your productivity, creativity, and get better results
          from AI tools.
        </p>
      </div>
    </section>
  );
};

export default Hero;
