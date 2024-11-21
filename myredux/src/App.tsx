import allRoutes from "./router/router";
import { useRoutes } from "react-router-dom";
import './App.css'
const App = () => {
  const routes = useRoutes(allRoutes);
  return <div className="whole">{routes}</div>;
};

export default App;
