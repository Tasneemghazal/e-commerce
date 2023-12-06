import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./components/web/home/Home.jsx";
import Categories from "./components/web/categories/Categories.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import HomeDashboard from "./components/dashboard/home/Home.jsx";
import CategoriesDashboard from "./components/dashboard/categories/Categories.jsx";
import Register from "./components/web/register/Register.jsx";
import Login from "./components/web/login/Login.jsx";
import { jwtDecode } from "jwt-decode";
import CategoryDetails from "./components/web/categories/CategoryDetails.jsx";
import Product from "./components/web/products/Product.jsx";
import { CartContextProvider } from "./components/web/context/Cart.jsx";
import Cart from "./components/web/cart/Cart.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const saveCurrentUser = () => {
    const token = localStorage.getItem("userToken");
    const decode = jwtDecode(token);
    setUser(decode);
  };
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveCurrentUser();
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,

      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login saveCurrentUser={saveCurrentUser} />,
        },
        {
          path: "category",
          element: <Categories />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "products/category/:id",
          element: <CategoryDetails />,
        },
        {
          path: "products/:id",
          element: <Product />,
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
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}
