import { SET_FORM_DATA, SET_LANGUAGE, TOGGLE_DARK_MODE } from "./actions";

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setFormData = (data) => ({
  type: SET_FORM_DATA,
  payload: data,
});
