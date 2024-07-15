import { SET_LANGUAGE } from "../actions/actions";

const initialState = {
  currentLanguage: "en",
  translations: {},
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
