import { SET_FORM_DATA } from "../actions/actions";

const initialContactState = {
  formData: null,
};

const contactReducer = (state = initialContactState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
