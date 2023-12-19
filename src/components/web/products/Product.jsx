import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/Cart";

export default function Product() {
  const { id } = useParams();
  const { addToCartContext } = useContext(CartContext);

  const getProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${id}`
    );

    return data.product;
  };
  const { data, isLoading } = useQuery("product", getProduct);
  console.log(data)
  const addToCart = async (id) => {
    const res = await addToCartContext(id);
  };
  if (isLoading) {
    return <h2>isLoading...</h2>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {data.subImages.map((image, index) => (
                <React.Fragment key={index}>
                  <img src={image.secure_url}  className="m-5 columns-2 image img-thumbnail"/>
                </React.Fragment>
          ))}
        </div>
        <div className="col-md-4">
          <h2 className="pt-5">{data.name}</h2>
          <p>{`$ ${data.price}`}</p>
          <button
            className="btn btn-outline-info"
            onClick={() => addToCart(data._id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
