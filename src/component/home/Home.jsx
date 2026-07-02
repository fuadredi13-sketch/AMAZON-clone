import React from 'react'
import Header from '../Header/Header'
import Bottomheader from '../Header/Bottomheader'
import CarouselEffect from '../caroulseleffect/carouseleffect'
import Catagory from "../catagory/Catagory"
import Product from '../product/product'

const Home = () => {
  return (
    <div>
      <Header />
      <Bottomheader />
      <CarouselEffect />
      <Catagory />
      <Product />
    </div>
  )
}

export default Home
