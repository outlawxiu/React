import { Navigate } from "react-router-dom";
import Mine from "../pages/mine/mine";
import Paper from "../pages/paper/paper";
import Select from "../pages/select/select";
import Wrong from "../pages/wrong/wrong";
import Home from "../pages/home/home";

const routes = [
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Navigate to="/wrong" replace></Navigate>,
      },
      {
        path: "/wrong",
        element: <Wrong></Wrong>,
      },
      {
        path: "/select",
        element: <Select></Select>,
      },
      {
        path: "/mine",
        element: <Mine></Mine>,
      },
    ],
  },
  {
    path: "/paper",
    element: <Paper></Paper>,
  },
];

export default routes;
