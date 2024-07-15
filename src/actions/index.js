import { SET_LANGUAGE, TOGGLE_DARK_MODE } from "./actions";

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
