import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Pdp from "../Pages/PDP/Pdp";
import Plp from "../Pages/Plp/Plp";
import Checkout from "../Pages/Checkout/Checkout";

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
    { path: "/checkout", element:<Checkout/> },

  ]);

  return <RouterProvider router={appRouter} />;

}

export default Router;
