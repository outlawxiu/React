import Create from "../pages/create/create";
import Home from "../pages/home/home";
import NotFound from '../pages/notFound/notFound'
import Preview from '../pages/preview/preview'
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
    path: "/preview",
    element: <Preview></Preview>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
];


export default routes
