import { createBrowserRouter } from "react-router";

import Apps from "../Apps/Apps";
import Installation from "../Installation/Installation";
import Root from "../Root/Root";
import AppDetails from "../Apps/AppDetails";
import Errorpages from "../Error/Errorpages";
import Home from "../Home/Home";
import Allcharts from "../Recharts/Allcharts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpages />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
        loader: async () => {
          const res = await fetch(`/homes.json`);
          const data = await res.json();
          return data;
        },
      },

      {
        path: "/appdetails/:id",
        element: <AppDetails />,
        loader: async () => {
          const res = await fetch(`/homes.json`);
          const data = await res.json();
          return data;
        },
      },
      {
        path: "allcharts",
        Component: Allcharts,
      },

      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);
