import { useState } from "react";
import BGHero from "./components/BGHero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`App w-[1440px] h-[3094px] mx-auto drop-shadow-2xl ${
        darkMode ? "dark" : ""
      }`}
    >
      <BGHero
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <Skills language={language} />
      <Profile language={language} />
      <Projects language={language} />
      {/* Diğer componentler buraya eklenecek */}
    </div>
  );
}

export default App;
