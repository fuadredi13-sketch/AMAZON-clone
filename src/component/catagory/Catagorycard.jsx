import React from 'react'
import { Link } from "react-router-dom";

const Catagorycard = ({ title, name, imgLink }) => {
  return (
    <div className="catagorycard">
      <Link to={`/category/${name}`}>
        <span>
          <h2>{title}</h2>
        </span>
        <img src={imgLink} alt={title} />
        <p>Shop now</p>
      </Link>
    </div>
  )
}

export default Catagorycard