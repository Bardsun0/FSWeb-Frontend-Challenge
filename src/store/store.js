import { legacy_createStore as createStore } from "redux";
import reducer from "../reducers";
import translations from "../translations";

const initialState = {
  language: {
    currentLanguage: "en",
    translations,
  },
  // diğer state'ler...
};

export const store = createStore(reducer, initialState);
