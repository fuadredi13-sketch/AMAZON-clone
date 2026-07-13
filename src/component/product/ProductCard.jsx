import React, { useContext, useReducer} from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currencyformat/CurrencyFormat";
import "./product.css";
import { DataContext } from "../DataProvider/DataProvider";
import {Type} from "../Utility/action.type"

const ProductCard = ({ product, flex }) => {
  const { id, image, title, price, rating = { rate: 0, count: 0 } } = product;

  const[cart, dispatch] = useContext(DataContext)

  console.log(cart.length)

  const addtocart = ()=>{
    dispatch({
      type:Type.ADD_TO_CART,
      item:{id, image, title, price, rating 

      }
    })
  }


  return (
    <div className={`product_card ${flex ? "flex" : ""}`}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div className="product_info">
        <h3>{title}</h3>

        <div className="product_rating">
          <Rating value={rating?.rate || 0} precision={0.5} readOnly />
          <small>({rating?.count || 0})</small>
        </div>

        <div className="product_price">
          <CurrencyFormat amount={price} />
        </div>

        <button onClick={addtocart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;