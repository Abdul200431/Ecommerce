import React, { useState } from 'react'
import './shop.css'
import { category } from '../../Category'
import { dummydata } from '../../dummydata'
import Product from '../../components/Product/Product'
import { FaShopify } from "react-icons/fa6";

function Shop() {

  let [cate, setcate] = useState(dummydata)

  function filterProducts(categoryName) {
    if (categoryName === "All") {
      setcate(dummydata)
    }else{
      const updatedata = dummydata.filter(
      (item) =>(item.category === categoryName))
    setcate(updatedata)
    }
    
  }

  return (
    <div className='shop'>
      <div className="heading">
        <span>E-Shop</span>
        <FaShopify />
      </div>
      <div className="category-section">
        {category.map((item) => (
          <div
            key={item.name}
            className="category-card"
            onClick={() => filterProducts(item.name)}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="product-section">
        {cate.map((item) => (
         <Product
  key={item.id}
  id={item.id}   
  name={item.name}
  price={item.price}
  image={item.image}
/>
        ))}
      </div>

    </div>
  )
}

export default Shop