import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Layout from "../../component/layout/Layout";
import ProductCard from "../../component/product/ProductCard";
import Loader from "../../component/loader/Loader";

import { producturl } from "../../API/endpoint";

const Result = () => {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${producturl}/category/${categoryName}`
        );

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Result</h1>

          <p style={{ padding: "0 30px 30px" }}>
            Category / <strong>{categoryName}</strong>
          </p>

          <hr />

          <div className="products_container">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <h2 style={{ textAlign: "center", marginTop: "30px" }}>
                No products found.
              </h2>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Result;