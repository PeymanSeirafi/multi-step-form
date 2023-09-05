import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const body = document.body;

body.className = "flex items-center justify-center min-h-[100vh] bg-[#f0f6ff]";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
