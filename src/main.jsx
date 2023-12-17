import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import Greeting from "./First.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
);
