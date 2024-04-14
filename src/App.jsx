import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/themeContext";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testemonials from "./components/Testemonials";
import Footer from "./components/Footer";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="dark:bg-[#121212] dark:text-white  ">
        <Navbar />
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <Hero />
          <Feature />
          <Workflow />
          <Pricing />
          <Testemonials />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
