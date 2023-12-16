import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "./pro.module.css";
import { TailSpin } from "react-loading-icons";
export default function Products() {
  const [pro, setpro] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let[page,setPage]=useState(1);
  const getProducts = async (page) => {
    try {
      const { data } = await axios.get(`https://ecommerce-node4.vercel.app/products?page=${page}`);
      console.log(data);
      setpro(data);
      console.log(pro)
      setIsLoading(false);
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
  };

  const getPage = async (pageNumber) => {
    setPage(pageNumber);
    setIsLoading(true);
    await getProducts(pageNumber);
  };

  useEffect(() => {
    getProducts(page);
  }, []);

  if (isLoading) {
    return (
      <>
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
    );
  }
  return (
    <div className="container">
      <div className="row">
        {pro.products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className={`${style.pro} pro my-3  py-5  d-flex flex-column justify-content-center align-items-center`}>
              <img src={product.mainImage.secure_url} alt={product.name} />
              <p className="pt-2">Price: ${product.price}</p>
              <p>Discount: {product.discount}</p>
              <h2 className={`${style.pro}`}>{product.name}</h2>
            </div>
          </div>
        ))}
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={() => getPage(page - 1)} disabled={page === 1}>
                Previous
              </button>
            </li>
            {Array.from({ length:pro.total / pro.page }).map((_, index) => (
              <li className="page-item" key={index}>
                <button className="page-link" onClick={() => getPage(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button className="page-link" onClick={() => getPage(page + 1)} disabled={page === pro.total / pro.page}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
