import React from 'react'
import Carousel from "../../component/caroulseleffect/carouseleffect";
import Category from "../../component/catagory/Catagory";
import Product from "../../component/product/Product";
import Layout from "../../component/layout/Layout";
const Landing = () => {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  )
}

export default Landing