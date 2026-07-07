import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currencyformat/CurrencyFormat";

const ProductCard = ({ product }) => {
  // Show loading while product is being fetched
  if (!product || Object.keys(product).length === 0) {
    return <h2>Loading...</h2>;
  }

  const {
    id,
    image,
    title,
    price,
    rating = { rate: 0, count: 0 },
  } = product;

  return (
    <div className="product_card">
      <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
      </Link>

      <div className="product_info">
        <h3>{title}</h3>

        <div className="product_rating">
          <Rating
            value={rating?.rate || 0}
            precision={0.5}
            readOnly
          />
          <small>({rating?.count || 0})</small>
        </div>

        <div className="product_price">
          <CurrencyFormat amount={price} />
        </div>
      </div>

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
