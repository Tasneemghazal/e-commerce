
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./components/web/context/Cart.jsx";
import { useContext, useEffect } from "react";
import { router } from "./layout/routes.jsx";
import { UserContext } from "./components/web/context/User.jsx";

export default function App() {
  let{userToken,setUserToken} = useContext(UserContext);
 useEffect(() => {
  if(localStorage.getItem("userToken")!=null){
    setUserToken(localStorage.getItem("userToken"));
  }
 },[])
  return (
     
        <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
     
      
  );
}
