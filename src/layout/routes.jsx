import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../components/web/home/Home.jsx";
import Categories from "../components/web/categories/Categories.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import HomeDashboard from '../components/dashboard/home/Home.jsx'
import CategoriesDashboard from '../components/dashboard/categories/Categories.jsx'
import Register from "../components/web/register/Register.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
            path: "register",
            element: <Register />,
          },
        {
          path: "category",
          element: <Categories />,
        },
        {
          path:'*',
          element: <h2>Page not Found web</h2>
        }
      ],
    },
    {
      path:'/dashboard',
      element:<DashboardLayout />,
    
      children:[{
        path:'home',
        element: <HomeDashboard />,
      },
      {
        path:'category',
        element: <CategoriesDashboard />,
      },
      {
        path:'*',
        element: <h2>Page not Found dash</h2>
      }
    ]
  
    }
  ]);