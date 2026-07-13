import React, { useState, useEffect } from 'react'
import Layout from '../../component/layout/Layout'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { producturl } from '../../API/endpoint';
import ProductCard from '../../component/product/ProductCard';
import Loader from '../../component/loader/Loader';

const Productdetail = () => {
  const [product, setproduct] = useState({});
  const [isloading, setisLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setisLoading(true);
    axios.get(`${producturl}/${productId}`)
      .then((res) => {
        console.log(res.data)
        setproduct(res.data)
        setisLoading(false)
      }).catch((err) => {
        console.log(err)
        setisLoading(false);
      })
  }, [productId]);

  return (
    <Layout>
      {isloading? (<Loader />):(<ProductCard product={product} flex={true} />)}
    </Layout>
  )
}

export default Productdetail