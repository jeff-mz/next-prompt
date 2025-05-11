import "./globals.css";
import { Suspense } from "react";
import Layout from "@/components/Layout";
import { Open_Sans } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          <Suspense
            fallback={
              <div className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-50 min-w-full min-h-screen p-8">
                Loading...
              </div>
            }
          >
            <Layout>
              {children}
              <SpeedInsights />
            </Layout>
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
