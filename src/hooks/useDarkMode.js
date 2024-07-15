import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../actions/actions";

const useDarkMode = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(toggleDarkMode());
  };

  return [darkMode, toggleMode];
};

export default useDarkMode;
