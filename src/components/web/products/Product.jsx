import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { CartContext } from "../context/Cart";

export default function Product() {
  const { id } = useParams();
  const {addToCartContext}= useContext(CartContext);
 
  const getProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${id}`
    );

    return data.product;
  };
  const { data, isLoading } = useQuery("product", getProduct);
  const addToCart = async(id) => {
    const res = await addToCartContext(id);
    console.log(res);
  };
  if (isLoading) {
    return <h2>isLoading...</h2>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          {data.subImages.map((image, index) => (
            <React.Fragment key={index}>
              <ReactImageMagnify
                className="mt-4 product"
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: image.secure_url,
                  },
                  largeImage: {
                    src: image.secure_url,
                    width: 1200,
                    height: 1800,
                  },
                  enlargedImageContainerDimensions: {
                    width: 200,
                    height: 200,
                  },
                  enlargedImagePosition: "over",
                  isHintEnabled: true,
                }}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="col-md-8">
          <h2 className="mt-2">{data.name}</h2>
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
