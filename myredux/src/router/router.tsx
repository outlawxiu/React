import { Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";
import Mine from "../pages/mine/mine";
import Recommend from "../pages/recommend/recommend";
import Tabpages from "../pages/tabpages/tabpages";
// 路由懒加载
const Find = lazy(() => import("../pages/find/find"));
const Roam = lazy(() => import("../pages/roam/roam"));
const Dynamic = lazy(() => import("../pages/dynamic/dynamic"));
const Search = lazy(() => import("../pages/search/search"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Tabpages></Tabpages>,
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
        path: "/mine",
        element: <Mine></Mine>,
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
    ],
  },
  {
    path: "/search",
    element: <Search></Search>,
  },
];

export default routes;
