// src/index.js o src/App.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "./i18n"; // Importar la configuración de i18next

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
