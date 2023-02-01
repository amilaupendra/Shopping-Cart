import React from 'react';
import { PRODUCTS } from '../../Products';
import { Product } from './Product';
import "./Shop.css";

export default function Shop() {
  return (
    <div className='main'>
        <div className="shopTitle">
            <h2>Online Store</h2>
        </div>
        <div className="products">
            {""}
            {PRODUCTS.map((product) => (
            <Product data={product }/>
        ))}

        </div>
    </div>
  )
}
