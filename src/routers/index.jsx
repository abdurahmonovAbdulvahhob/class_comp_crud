import { useRoutes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import NotFound from "../pages/not-found/NotFound";
import Food from "../components/food/Food";


const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/",
          element: <Food />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
};
export default Router;
