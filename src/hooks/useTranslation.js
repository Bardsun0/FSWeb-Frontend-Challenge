import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../actions/actions";
import translations from "../translations";

const useTranslation = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const [translationData, setTranslationData] = useState(
    translations[currentLanguage]
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    if (savedLanguage !== currentLanguage) {
      dispatch(setLanguage(savedLanguage));
    }
  }, [dispatch, currentLanguage]);

  useEffect(() => {
    setTranslationData(translations[currentLanguage]);
  }, [currentLanguage]);

  const t = (key) => translationData[key] || key;

  return t;
};

export default useTranslation;
