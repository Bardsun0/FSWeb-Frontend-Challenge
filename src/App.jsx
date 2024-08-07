import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ContactMe from "./pages/ContactMe";
import ThankYou from "./pages/ThankYou";
import MainPage from "./pages/MainPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const darkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div
        className={`App w-[1440px] h-[3094px] mx-auto drop-shadow-2xl ${
          darkMode ? "dark" : ""
        }`}
      >
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
