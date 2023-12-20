import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../context/Cart";
import style from "./pro.module.css";
import { FaRegStar, FaStar } from "react-icons/fa6";
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
  console.log(data);
  const addToCart = async (id) => {
    const res = await addToCartContext(id);
  };
  const getStars=(rating)=>{
    let stars = [];
    for(let i=0;i<rating;i++){
       stars.push(<FaStar color="yellow"/>);
    }
    while(stars.length<5){
      stars.push(<FaRegStar/>);
    }
    return stars;
  }
  if (isLoading) {
    return <h2>isLoading...</h2>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {data.subImages.map((image, index) => (
            <React.Fragment key={index}>
              <img
                src={image.secure_url}
                className={`${style.image} img-thumbnail`}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="col-md-4">
          <h2 className="pt-5">{data.name}</h2>
          <p  className={`${style.price} `}><b>Description:</b> {data.description}</p>
          <p className={`${style.price} `}><b>Price: {`$ ${data.price}`}</b></p>
          <button 
            className="btn btn-outline-info"
            onClick={() => addToCart(data._id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div>
        <h2 className={`${style.review}`}>Reviews</h2>
        <div className="column">
          {data.reviews.map((review) => (
            <div className="card mb-3 py-4">
              <img src={review.createdBy.image.secure_url} className={`${style.review_img} rounded-circle `} />
              <div className="card-body text-center">
                <h5 className="card-title">{review.createdBy.userName}</h5>
                <p className="card-text text-dark">
                  {getStars(review.rating)}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {review.comment}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="create_Review d-flex justify-content-center ">
        <Link className={`${style.create_review_link} text-decoration-none d-flex bg-info py-3 px-2 mb-2`} to={`review`}>Add Review</Link>
        </div>
       
      </div>
    </div>
  );
}
