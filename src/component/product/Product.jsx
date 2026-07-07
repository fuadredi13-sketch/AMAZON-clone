import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../loader/Loader";
import "./product.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="products_container">
          {product.map((singleProduct) => (
            <ProductCard
              key={singleProduct.id}
              product={singleProduct}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Product;