import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./i18n";
import App from "./App";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);