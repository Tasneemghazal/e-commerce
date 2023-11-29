import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingIcons from 'react-loading-icons'
export default function Home() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getCateories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories`
      );
      setCategories(data.categories);

    } catch (error) {
      console.log(error);

    } finally{
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCateories();
  }, []);
  if(isLoading) {
    return <><LoadingIcons.SpinningCircles /></>
  }
  return (
    <div className="container">
      <div className="row">
        {categories.length ? (
          categories.map((category) => (
            <div className="col-md-3" key={category._id}>
              <img src={category.image.secure_url} alt="" className="w-50" />
              <h2>{category.name}</h2>
            </div>
          ))
        ) : (
          <h1>No category found</h1>
        )}
      </div>
    </div>
  );
}
