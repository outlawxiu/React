import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";

//配置路由模式
import { BrowserRouter } from "react-router-dom";

//
import { Provider } from "react-redux";
import store from './store/index.ts'
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
