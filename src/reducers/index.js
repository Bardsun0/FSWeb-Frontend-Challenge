import { combineReducers } from "redux";
import darkModeReducer from "./darkModeReducer";
import languageReducer from "./languageReducer";

const reducer = combineReducers({
  darkMode: darkModeReducer,
  language: languageReducer,
});

export default reducer;
