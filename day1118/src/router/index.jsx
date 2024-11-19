import React from "react";
import { Navigate } from "react-router-dom";
const Dynamic = React.lazy(() => import("../pages/dynamic/Dynamic")),
  Mine = React.lazy(() => import("../pages/mine/Mine")),
  Roam = React.lazy(() => import("../pages/roam/Roam")),
  Find = React.lazy(() => import("../pages/find/Find")),
  Recommend = React.lazy(() => import("../pages/recommend/Recommend")),
  Login = React.lazy(() => import("../pages/login/Login")),
  Home = React.lazy(() => import("../home/Home")),
  Search = React.lazy(() => import("../pages/search/Search")),
  Player = React.lazy(() => import("../pages/player/Player"));

const router = [
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Navigate to="/recommend"></Navigate>,
      },
      {
        path: "/recommend",
        element: <Recommend></Recommend>,
      },
      {
        path: "/find",
        element: <Find></Find>,
      },
      {
        path: "/roam",
        element: <Roam></Roam>,
      },
      {
        path: "/dynamic",
        element: <Dynamic></Dynamic>,
      },
      {
        path: "/mine",
        element: <Mine></Mine>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/search",
    element: <Search></Search>,
  },
  {
    path: "/player",
    element: <Player></Player>,
  },
];

export default router;
