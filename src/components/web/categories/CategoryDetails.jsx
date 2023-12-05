import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './categories.css'
export default function CategoryDetails() {
  const { id } = useParams();
  const getCategoryDetails = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/category/${id}`
    );
    return data.products;
  };
  const { data, isLoading } = useQuery("category_details", getCategoryDetails);
  if (isLoading) {
    return <h2>isLoading...</h2>;
  }
  return( 
  <div className="container">
    <div className="row">
    {data.length?data.map((product)=>
        <div className=" col-md-4 text-center ">
          <div className="product py-5">
            <img src={product.mainImage.secure_url}/>
            <h2>{product.name}</h2>
            <Link to={`/products/${product._id}`} className="text-decoration-none">Details</Link>
            </div>
        </div>
    ):<h2>product not found</h2>}
    </div>
  </div>
  );
}
