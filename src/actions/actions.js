export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
