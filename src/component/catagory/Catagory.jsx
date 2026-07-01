import React from 'react'
import { catagoryinfo } from './Catagoryinfo'
import Catagorycard from './Catagorycard'
import './catagorycard.css'

const Catagory = () => {
  return (
    <div className="catagory">
      {catagoryinfo.map((item) => (
        <Catagorycard key={item.name} {...item} />
      ))}
    </div>
  )
}

export default Catagory
