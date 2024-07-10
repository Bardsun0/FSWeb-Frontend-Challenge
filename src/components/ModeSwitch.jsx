const ModeSwitch = ({ darkMode, setDarkMode }) => {
  return (
    <div className="w-[359px] h-[38px] p-[10px] text-custom-modecolor font-inter font-bold flex items-center tracking-wider relative transform translate-x-[-20px] translate-y-[40px]">
      <div className="flex items-center">
        <button
          className={`w-[55px] h-[24px] rounded-full relative mr-2 right-[28px] bottom-[2px] ${
            darkMode ? "bg-custom-black" : "bg-custom-pink"
          } transition-colors duration-300`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <span
            className={`w-[16px] h-[16px] rounded-full absolute top-[4px] 
            transition-all duration-300 ease-in-out ${
              darkMode
                ? "bg-white left-[4px] transform scale-x-75"
                : "bg-custom-yellow left-[35px]"
            } ${
              darkMode
                ? 'after:content-[""] after:absolute after:top-0 after:right-0 after:w-4/5 after:h-full after:bg-custom-yellow after:rounded-l-full'
                : ""
            }`}
          ></span>
        </button>
        <div className="relative bottom-[2px] right-[28px]">
          {darkMode ? "LIGHT MODE" : "DARK MODE"}
        </div>
      </div>
      <div className="relative right-[12px]">|</div>
      <div className="relative left-[12px] bottom-[2px]">
        <span className="text-custom-pink">TÜRKÇE</span>'YE GEÇ
      </div>
    </div>
  );
};

export default ModeSwitch;
