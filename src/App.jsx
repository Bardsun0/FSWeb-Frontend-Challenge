import BGHero from "./components/BGHero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.darkMode);

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
      <BGHero />
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
