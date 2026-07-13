import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
import logo from '../../assets/amazonlogo (1).svg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
  const [state, dispatch] = useContext(DataContext)

  return (
    <div className="header">

      {/* Logo */}
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Amazon Logo" />
        </Link>
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
        <div className="header-search-select-wrapper">
          <select className="header-search-select">
            <option value="all">All</option>
          </select>
          <ArrowDropDownIcon className="header-search-select-arrow" />
        </div>
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
        <Link to="/signup">
          <p>Hello, sign in</p>
          <span>Account & Lists <ArrowDropDownIcon /></span>
        </Link>
      </div>

      {/* Returns */}
      <div className="header-nav">
        <Link to="/orders">
          <p>Returns</p>
          <span>& Orders</span>
        </Link>
      </div>

      {/* Cart */}
      <div className="header-cart">
        <Link to="/Cart">
          <span> <ShoppingCartOutlinedIcon /> Cart</span>
          <span>{state.cart.length}</span>
        </Link>
      </div>

    </div>
  )
}

export default Header

