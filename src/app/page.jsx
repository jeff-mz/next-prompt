import FeaturedPrompts from "@/components/FeaturedPrompts";
const HomePage = () => {
  return (
    <section className="container mx-auto py-8 px-2 xl:py-28">
      <div className="flex align-items-center justify-center flex-col text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl xl:text-8xl xl:pt-16 dark:text-white leading-[1.3]">
          Discover & Share
          <br />
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            AI-based Prompts
          </span>
        </h1>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-normal text-gray-500 dark:text-gray-400 mt-4 max-w-5xl leading-[1.5] xl:leading-[2] mx-auto">
          Generate powerful, optimized prompts for ChatGPT, Claude, Gemini, and
          more. Enhance your AI outputs, productivity, and get better results
          from AI tools.
        </p>
      </div>
      <div className="my-8 xl:mt-16">
        <FeaturedPrompts />
      </div>
    </section>
  );
};

export default HomePage;
