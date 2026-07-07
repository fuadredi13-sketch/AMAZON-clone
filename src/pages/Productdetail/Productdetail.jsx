import React, { useState, useEffect } from 'react'
import Layout from '../../component/layout/Layout'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { producturl } from '../../API/endpoint';
import ProductCard from '../../component/product/ProductCard';
import Loader from '../../component/loader/Loader';

const Productdetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`${producturl}/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [productId]);

  return (
    <Layout>
      {loading ? (<Loader />) : (<ProductCard product={product} />)}
    </Layout>
  );
};

export default Productdetail;