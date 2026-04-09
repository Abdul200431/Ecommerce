import React from 'react'
import CartCard from '../../components/CartCard/CartCard'
import "./Cart.css"
import { useSelector } from 'react-redux';
import emptyCart from "../../assets/emptycart.png";

function Cart() {
  let items = useSelector(state => state.cart.items);
console.log("CART ITEMS:", items);  // 👈 ADD HERE
  let total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart">
      {items.length <= 0 ? (
        <div className="empty-card">
          <img src={emptyCart} alt="Empty Cart" />
          <h2>Your Cart is Empty</h2>
        </div>
      ) : (
        <div className="cartCard-section">
         {items.map((item) => (
  <CartCard key={item.id} item={item} />
))}
          <div className="price-section">
            <span>Total Products : {items.length}</span>
            <span>Total Price : Rs {total}/-</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart