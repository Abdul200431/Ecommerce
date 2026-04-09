import React from 'react'
import { FaShopify } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Nav.css'
import { useDispatch,useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

function Nav() {
  let dispatch=useDispatch()
  let items = useSelector((state) => state.cart.items);
  console.log(items);

  return (
    <div className="nav">
      <div className="top-nav">
        <Link to="/">
          <div className="logo">
            <span>E-Shop</span>
            <FaShopify />
          </div>
        </Link>

        <form className='search-box'>
          <input type="text" placeholder='Search Items...' />
          <button><IoSearchOutline /></button>
        </form>

        <Link to="/cart">
          <div className="cart-box">
            <FiShoppingCart />
            <span>{items.length}</span> 
          </div>
        </Link>
      </div>

     <div className="bottom-nav">
  <Link to="/">Home</Link>
  <Link to="/shop">Shop</Link>
  <Link to="/cart">Cart</Link>
  <Link to="/contact">Contact</Link>
</div>
    </div>
  )
}

export default Nav