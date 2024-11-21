import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/store.ts";
// 路由模式
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>加载中...</div>}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
);
