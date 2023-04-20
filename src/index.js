import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// <React.StrictMode> This tags allows react to activate extra checks and throw warnings

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
