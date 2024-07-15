import { SET_LANGUAGE, TOOGLE_DARK_MODE } from "./actions";

export const toggleDarkMode = () => ({
  type: TOOGLE_DARK_MODE,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
