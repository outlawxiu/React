import React from "react";
import { useRoutes } from "react-router-dom";
import router from "./router/index";
import { AudioProvider } from "./store/audio";

const App = () => {
  const routes = useRoutes(router);
  return (
    <AudioProvider>
      <div className="app">{routes}</div>
    </AudioProvider>
  );
};

export default App;
