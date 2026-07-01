import React from 'react'
import "./Bottomheader.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Bottomheader = () => {
  return (
    <div className="header-bottom">
      <div className="header-bottom-all">
        <MenuOutlinedIcon fontSize="small" />
        <span>All</span>
      </div>
      <nav className="header-bottom-nav">
        <span>Today's Deals</span>
        <span>Prime Video</span>
        <span>Gift Cards</span>
        <span>Sell</span>
        <span>Registry</span>
        <span>Customer Service</span>
      </nav>
    </div>
  )
}

export default Bottomheader