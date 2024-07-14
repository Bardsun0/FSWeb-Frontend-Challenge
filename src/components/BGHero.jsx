import Hero from "./Hero";
import ModeSwitch from "./ModeSwitch";

function BGHero({ darkMode, setDarkMode, language, setLanguage }) {
  return (
    <div className="w-[1440px] h-[738px] relative">
      <div className="absolute top-[25px] right-[120px]">
        <ModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />
      </div>
      <div className="absolute top-[150px] left-[176px] right-[172px]">
        <Hero language={language} />
      </div>
    </div>
  );
}

export default BGHero;
