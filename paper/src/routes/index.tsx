import Create from "../pages/create/create";
import Home from "../pages/home/home";
import NotFound from '../pages/notFound/notFound'
const routes = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/create",
    element: <Create></Create>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
];


export default routes
