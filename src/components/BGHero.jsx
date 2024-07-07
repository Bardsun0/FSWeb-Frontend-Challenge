import Hero from "./Hero";
import ModeSwitch from "./ModeSwitch";

function BGHero() {
  return (
    <div className="w-[1440px] h-[738px] drop-shadow-lg relative bg-custom-lightgray">
      <div className="absolute top-[25px] right-[120px]">
        <ModeSwitch />
      </div>
      <div className="absolute top-[150px] left-[176px] right-[172px]">
        <Hero />
      </div>
    </div>
  );
}

export default BGHero;
