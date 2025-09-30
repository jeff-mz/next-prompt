import { SiRobotframework } from "react-icons/si";
const Hero = () => {
  return (
    <section className="container mx-auto py-8 px-2 md:py-16 2xl:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="flex align-items-center justify-center flex-col text-center">
        <SiRobotframework className="mx-auto h-20 w-20 text-[#4F46E5] animate-(--my-animation)" />
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-indigo-900 md:text-5xl lg:text-5xl xl:text-7xl xl:pt-8 dark:text-white leading-[1.3]">
          Discover & Share
          <br />
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            AI-based Prompts
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Generate powerful, optimized prompts for ChatGPT, Claude, Gemini, and
          more. Enhance your AI outputs, productivity, and get better results
          from AI tools.
        </p>
      </div>
    </section>
  );
};

export default Hero;
