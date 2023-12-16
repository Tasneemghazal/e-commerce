import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
export default function Orders() {
  let token = localStorage.getItem("userToken")
  const getOrder =async ()=>{
  const {data} = await axios.get("https://ecommerce-node4.vercel.app/order",{ headers: { Authorization: `Tariq__${token}` } });
  return data;
  }
  const {data,isLoading} =useQuery("getOrder",getOrder);
  console.log(data);
  if(isLoading){
    return <h2>loading...</h2>
  }
  return (
    <div className="container">
       <div className="row">
      {data?.orders
        ? data.orders.map((order, index) => (
            <div className='col-md-4' key={index}>
              <div className="pro pt-5">
                <h2>Address: {order.address}</h2>
                <h2>Phone Number: {order.phoneNumber}</h2>
                <h2>Final Price: {order.finalPrice}</h2>
                <h2>Order: {order.paymentType}</h2>
              </div>
            </div>
          ))
        : ""}
    </div>
    </div>
   
   
  );
}
