import { Suspense } from "react";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import AuthProvider from "@/components/AuthProvider";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | AI-Based Prompt Generator",
    default: "AI-Based Prompt Generator",
  },
  description:
    "Generate powerful prompts for ChatGPT, Claude, Gemini, and more. Enhance your AI outputs, and get better results from AI tools.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${open_sans.className}  antialiased`}>
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>{children}</Layout>
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
