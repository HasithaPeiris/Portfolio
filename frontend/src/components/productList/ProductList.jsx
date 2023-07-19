import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

function ProductList() {
  return (
    <div className='pl'>
      <div className="pl-wrapper">
        <div className="pl-texts">
            <h1 className="pl-title">This is a sample heading</h1>
            <p className="pl-desc">Hello! I'm a professional graphic designer having rich experience in Logo Design. My main goal is to make my customers delighted with creative designs. Let's join the world of creativity!</p>
        </div>
        <div className="pl-list">
          {products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList