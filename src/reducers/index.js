import { combineReducers } from "redux";
import darkModeReducer from "./darkModeReducer";
import languageReducer from "./languageReducer";
import contactReducer from "./contactReducer";

const reducer = combineReducers({
  darkMode: darkModeReducer,
  language: languageReducer,
  contact: contactReducer,
});

export default reducer;
