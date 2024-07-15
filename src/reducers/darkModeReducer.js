import { TOGGLE_DARK_MODE } from "../actions/actions";

const initialState = false;

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return !state;
    default:
      return state;
  }
};

export default darkModeReducer;
