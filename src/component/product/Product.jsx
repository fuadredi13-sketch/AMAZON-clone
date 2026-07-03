import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./product.css";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return (
    <div className="products_container">
      {product.map((singleProduct) => (
        <ProductCard
          product={singleProduct}
          key={singleProduct.id}
        />
      ))}
    </div>
  );
};

export default Product;