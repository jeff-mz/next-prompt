"use client";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <main className="bg-slate-100 dark:bg-slate-900">
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
