import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "../src/components/ui/styles/index.css";
import "../src/components/languages/i18next.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading ...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
