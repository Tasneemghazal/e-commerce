import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const CartContext = createContext(null);
export function CartContextProvider({ children }) {
const addToCartContext=async(productId) => {
    try{
        const token = localStorage.getItem("userToken");
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
        {productId},{headers:{Authorization:`Tariq__${token}`}}
        );
        if (data.message == "success") {
          toast.success("product added successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
         
        }
        return data;
    }
    catch(err){
        console.log(err);
    }
};
const getCartContext = async()=>{
  try{
    const token = localStorage.getItem("userToken");
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/cart`,{headers:{Authorization:`Tariq__${token}`}});
    return data;
  }
  catch(err){
    console.log(err);
  }
};
const removeItemContext = async(productId)=>{
  try{
  const token = localStorage.getItem("userToken");
  const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/cart`,{productId},{headers:{Authorization:`Tariq__${token}`}});
  return data;
  }
  catch(err){
    console.log(err);
  }
};
  return (
    <CartContext.Provider value={{addToCartContext,getCartContext,removeItemContext}}>
      {children}
    </CartContext.Provider>
  );
}
