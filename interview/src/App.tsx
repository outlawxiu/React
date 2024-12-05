import React from "react";
import routes from "./router/index";
import { useRoutes } from "react-router-dom";
import Home from './pages/home/home'
const App = () => {
  const allRoutes = useRoutes(routes);
  return (<div id="whole">
    {allRoutes}
  </div>)
};

export default App;
