export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_FORM_DATA = "SET_FORM_DATA";

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
