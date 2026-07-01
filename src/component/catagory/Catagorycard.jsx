import React from 'react'

const Catagorycard = ({ title, name, imgLink }) => {
  return (
    <div className="catagorycard">
      <a href="">
        <span>
          <h2>{title}</h2>
        </span>
        <img src={imgLink} alt={title} />
        <p>Shop now</p>
      </a>
    </div>
  )
}

export default Catagorycard