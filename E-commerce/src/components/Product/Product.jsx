import React from 'react'
import image1 from "../../assets/image1.jpg"
import "./Product.css"
import {useDispatch} from 'react-redux';
import { AddItem } from '../../redux/cartSlice';
function Product({name,price,image,id}) {
  let dispatch=useDispatch();
  return (
    <div className='product'>
        <img src={image} alt="Product" />
        <div className="product-details">
            <span className='name'>{name}</span>
            <span className='price'>Rs {price}/-</span>
            <button onClick={() => {dispatch(AddItem({name:name,image:image,price:price,id:id}))
            alert("Product added to cart successfully!");}}>
                Add to Cart
            </button>
        </div>
    </div>
  )
}
    
export default Product