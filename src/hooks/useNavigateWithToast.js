import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useNavigateWithToast = () => {
  const navigate = useNavigate();

  const navigateWithToast = (path, message) => {
    toast(message);
    navigate(path);
  };

  return navigateWithToast;
};

export default useNavigateWithToast;
