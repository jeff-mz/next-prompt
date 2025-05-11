"use client";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
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
