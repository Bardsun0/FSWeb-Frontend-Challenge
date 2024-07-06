import Hero from "./Hero";
import ModeSwitch from "./ModeSwitch";

function BGHero() {
  return (
    <div className="w-[1440px] h-[738px] bg-custom-white relative">
      <div className="absolute top-6 right-6">
        <ModeSwitch />
      </div>
      <Hero />
    </div>
  );
}

export default BGHero;
