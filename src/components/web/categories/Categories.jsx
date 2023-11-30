import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import {TailSpin}  from "react-loading-icons";

export default function Categories() {
  const getCategories =  async() =>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    return data;
  }
  const {data,isLoading} = useQuery('web_categories',getCategories);
  if(isLoading){
    return <>
   <TailSpin
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </>
  }
  return (
    <div className="container">
      <div className="row">
       
          {data?.categories.length? data?.categories.map((category)=>
           <div className="col-md-3" key={category._id}>
          <img src={category.image.secure_url} alt="" className="w-50" />
          <h2>{category.name}</h2>
          </div>
          ):<h1>no category found</h1>}
        </div>
     
    </div>
  );

}
