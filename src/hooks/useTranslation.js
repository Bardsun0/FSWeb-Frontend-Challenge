import { useSelector } from "react-redux";

const useTranslation = () => {
  const { currentLanguage, translations } = useSelector(
    (state) => state.language
  );

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  return t;
};

export default useTranslation;
