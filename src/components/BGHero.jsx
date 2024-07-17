import Hero from "./Hero";
import ModeSwitch from "./ModeSwitch";
import useTranslation from "../hooks/useTranslation";
import useNavigateWithToast from "../hooks/useNavigateWithToast";

function BGHero() {
  const t = useTranslation();
  const navigateWithToast = useNavigateWithToast();

  const handleContactClick = () => {
    navigateWithToast("/contact", t("navigatingToContact"));
  };

  return (
    <div className="w-[1440px] h-[738px] relative">
      <div className="absolute top-[25px] right-[120px]">
        <ModeSwitch />
      </div>
      <div className="absolute top-[150px] left-[176px] right-[172px]">
        <Hero />
      </div>
      <button
        onClick={handleContactClick}
        className="absolute top-[100px] right-[120px] bg-custom-pink text-white p-2 rounded"
      >
        {t("contactMe")}
      </button>
    </div>
  );
}

export default BGHero;
