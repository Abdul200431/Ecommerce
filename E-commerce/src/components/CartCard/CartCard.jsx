import React from "react";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../redux/cartSlice"; // ✅ correct import
import "./CartCard.css";

function CartCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="Cartcard">
      
      <div className="left-card">
        <img src={item.image} alt={item.name} />

        <div className="name-price">
          <h3>{item.name}</h3>
          <p>Rs {item.price}/-</p>
        </div>
      </div>

      <div className="right-card">
        <button
          onClick={() => {
            dispatch(RemoveItem(item.id));
            alert("Product removed successfully!");
          }}
        >
          Remove
        </button>
      </div>

    </div>
  );
}

export default CartCard;