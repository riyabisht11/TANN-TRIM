import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Pdp from "../Pages/PDP/Pdp";
import Contact from "../Pages/Contact/Contact";
import Plp from "../Pages/Plp/Plp";

function Router() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/pdp", element: <Pdp /> },
        { path: "/plp", element: <Plp/> },
      ],
    },

  ]);

  return <RouterProvider router={appRouter} />;

}

export default Router;
