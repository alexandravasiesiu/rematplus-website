import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <I18nextProvider i18={i18n}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>
);
