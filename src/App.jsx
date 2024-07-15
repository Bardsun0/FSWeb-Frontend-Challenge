import { setLanguage, toggleDarkMode } from "./actions";
import BGHero from "./components/BGHero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

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
        setDarkMode={() => dispatch(toggleDarkMode())}
        language={language}
        setLanguage={(lang) => dispatch(setLanguage(lang))}
      />
      <Skills language={language} />
      <Profile language={language} />
      <Projects language={language} />
      {/* Diğer componentler buraya eklenecek */}
    </div>
  );
}

export default App;
