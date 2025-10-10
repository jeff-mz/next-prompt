import Hero from "@/components/Hero";
import PromptGuide from "@/components/PromptGuide";
import FeaturedPrompts from "@/components/FeaturedPrompts";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import GenerateInput from "@/components/GenerateInput";
const HomePage = () => {
  return (
    <>
      <Hero />
      <GenerateInput />
      <PromptGuide />
      <FeaturedPrompts />
      <WhyUs />
      <FAQ />
    </>
  );
};

export default HomePage;
