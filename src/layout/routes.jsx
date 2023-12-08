import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../components/web/home/Home.jsx";
import Categories from "../components/web/categories/Categories.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import HomeDashboard from "../components/dashboard/home/Home.jsx";
import CategoriesDashboard from "../components/dashboard/categories/Categories.jsx";
import Register from "../components/web/register/Register.jsx";
import Login from "../components/web/login/Login.jsx";
import CategoryDetails from "../components/web/categories/CategoryDetails.jsx";
import Cart from "../components/web/cart/Cart.jsx";
import Product from "../components/web/products/Product.jsx";
import ProtectedRoutes from "../components/web/protectedRoutes/ProtectedRoutes.jsx";
import Profile from "../components/web/profile/Profile.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "category",
        element: <Categories />,
      },
      {
        path: "cart",
        element:
        <ProtectedRoutes>
          <Cart/>
        </ProtectedRoutes> 
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path: "products/category/:id",
        element: <CategoryDetails />,
      },
      {
        path: "products/:id",
        element: <Product/>,
      },
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "*",
        element: <h2>Page not Found web</h2>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,

    children: [
      {
        path: "home",
        element: <HomeDashboard />,
      },
      {
        path: "category",
        element: <CategoriesDashboard />,
      },
      {
        path: "*",
        element: <h2>Page not Found dash</h2>,
      },
    ],
  },
]);
