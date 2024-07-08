import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Tasks from "../components/Tasks/Tasks";
import Wallet from "../components/Wallet/Wallet";
import Layout from "../components/Layout/Layout";


const router = createBrowserRouter([
    {
    path: '/',
      element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
              path: 'tasks',
              element: <Tasks />
          },
          {
            path: 'wallet',
            element: <Wallet />
            }
        ],
    },
])

export default router