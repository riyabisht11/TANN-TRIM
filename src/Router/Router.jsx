import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Pdp from "../Pages/PDP/Pdp";
import Plp from "../Pages/Plp/Plp";
import Checkout from "../Pages/Checkout/Checkout";
import Forgotpassword from "../Pages/Home/Forgotpassword";
import Forgotlink from "../Pages/Home/Forgotlink";
import Orderplaced from "../Components/Topmenu/Orderplaced";

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
    { path: "/forgotpassword", element:<Forgotpassword/> },
    { path: "/forgotlink", element:<Forgotlink/> },
    { path: "/orderplaced", element:<Orderplaced/>},
   

  ]);

  return <RouterProvider router={appRouter} />;

}

export default Router;
