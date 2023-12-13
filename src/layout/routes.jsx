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
import SendCode from "../components/web/sendCode/SendCode.jsx";
import ForgetPassword from "../components/web/forgetPassword/ForgetPassword.jsx";
import UserInfo from "../components/web/profile/UserInfo.jsx";
import UserContact from "../components/web/profile/UserContact.jsx";
import Orders from "../components/web/order/Orders.jsx";
import CreateOrder from "../components/web/order/CreateOrder.jsx";
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
        element:
        <ProtectedRoutes>
           <Profile/>
        </ProtectedRoutes>,
        children:[
          {
           index:true,
            element:<UserInfo/>
          },
          {
            path:"contact",
            element:<UserContact/>
          },
          {
            path:"orders",
            element:<Orders/>
          },
        ]
       
      },
      {
        path:"createOrder",
        element:<CreateOrder/>
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
        path:"sendCode",
        element:<SendCode/>
      },
      {
        path:"forgetpassword",
        element:<ForgetPassword/>
      },

      {
        path: "*",
        element: <h1 className="text-center pt-5">Tasneem Shop</h1>,
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
