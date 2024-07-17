import { useNavigate } from "react-router-dom";
import useTranslation from "../hooks/useTranslation";

const ThankYou = () => {
  const navigate = useNavigate();
  const t = useTranslation();

  return (
    <div className="w-[1440px] min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">{t("thankYouMessage")}</h2>
      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-custom-pink text-white p-2 rounded"
      >
        {t("backToHome")}
      </button>
    </div>
  );
};

export default ThankYou;
