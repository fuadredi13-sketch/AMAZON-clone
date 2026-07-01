import React from 'react'
import './Header.css'
import logo from '../../assets/amazonlogo (1).svg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Header = () => {
  return (
    <div className="header">

      {/* Logo */}
      <div className="header-logo">
        <img src={logo} alt="Amazon logo" />
      </div>

      {/* Deliver to */}
      <div className="header-delivery">
        <span> <LocationOnOutlinedIcon /> </span>
        <div>
          <p>Deliver to</p>
          <span>Ethiopia</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="header-search">
        <select className="header-search-select">
          <option>All <ArrowDropDownIcon /></option>
        </select>
        <input type="text" placeholder="Search Amazon" className="header-search-input" />
        <button className="header-search-btn"> <SearchIcon /> </button>
      </div>

    {/* Language */}
    <div className="header-nav">
    <span>
        <img 
        src="https://flagcdn.com/w20/us.png" 
        alt="US flag" 
        style={{ width: '20px', height: '14px', marginRight: '4px', verticalAlign: 'middle' }}
        onError={(e) => { e.target.style.display = 'none' }}
        />
        EN <ArrowDropDownIcon />
    </span>
    </div>
      {/* Account */}
      <div className="header-nav">
        <p>Hello, sign in</p>
        <span>Account & Lists <ArrowDropDownIcon /></span>
      </div>

      {/* Returns */}
      <div className="header-nav">
        <p>Returns</p>
        <span>& Orders</span>
      </div>

      {/* Cart */}
      <div className="header-cart">
        <span className="header-cart-count"></span>
        <span> <ShoppingCartOutlinedIcon /> Cart</span>
      </div>

    </div>
  )
}

export default Header


