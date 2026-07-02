import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../currencyformat/CurrencyFormat';
import "./product.css"

const ProductCard = ({ product }) => {
    const { image, title, rating, price } = product;
  return (
  <div className="product_card">
    <a href="">
      <img src={image} alt={title} />
    </a>

    <div className="product_info">
      <h3>{title}</h3>

      <div className="product_rating">
        <Rating
          value={rating.rate}
          precision={0.5}
          readOnly
        />
        <small>({rating.count})</small>
      </div>

      <div className="product_price">
        <CurrencyFormat amount={price} />
      </div>
    </div>

    <button>Add to Cart</button>
  </div>
)
}

export default ProductCard
