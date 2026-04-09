import React, { useState } from 'react'
import bg from "../../assets/bg0.gif"
import "./home.css"
import { category } from '../../Category'
import Product from '../../components/Product/Product'
import { dummydata } from '../../dummydata'

function Home() {

  let [cate, setcate] = useState(dummydata)
  function filterProducts(category) {
  const updatedata = dummydata.filter((item) => (item.category === category))
    setcate(updatedata)
  }

  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="Hero Background" />
      </div>
      <div className="category-section">
        {category.slice(0,5).map((item)=>(
          <div className="category-card" onClick={() => {filterProducts(item.name)}}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <h1>Trending Products</h1>

      <div className="product-section">
        {cate.slice(0,8).map((item)=>(
          <Product 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            image={item.image}
            id={item.id}
          />
        ))}
      </div>

    </div>
  )
}

export default Home