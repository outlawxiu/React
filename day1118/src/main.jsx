import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";

import { BrowserRouter, HashRouter } from "react-router-dom";
import React, { Suspense } from "react";

const root = createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<div className="loading">加载中...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
