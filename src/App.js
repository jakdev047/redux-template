import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";

function App() {
  const {appName} = useSelector((state) => state?.appInfo);
  return (
    <div className="app">
      <h2>{appName}</h2>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
