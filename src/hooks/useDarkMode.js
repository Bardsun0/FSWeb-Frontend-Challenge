import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../actions/actions";
import { useEffect } from "react";

const useDarkMode = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode !== darkMode) {
      dispatch(toggleDarkMode());
    }
  }, [dispatch, darkMode]);

  const toggleMode = () => {
    localStorage.setItem("darkMode", !darkMode);
    dispatch(toggleDarkMode());
  };

  return [darkMode, toggleMode];
};

export default useDarkMode;
