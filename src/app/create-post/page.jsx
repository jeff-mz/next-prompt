import ClientPromptForm from "./ClientPromptForm";

export const generateMetadata = async () => {
  return { title: `Create Prompt | AI-Based Prompt Generator` };
};
const CreatePrompt = () => {
  return <ClientPromptForm />;
};

export default CreatePrompt;
