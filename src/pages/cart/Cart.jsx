import React, {useContext} from 'react';
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../../context/Shop-Context';
import { CartItem } from './Cart-item';
import "./Cart.css";
import { useNavigate } from "react-router-dom";



export default function Cart() {
    const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

  return( <div className='cart'> 
  <div>
    <h1>Your Cart Items</h1>
  </div>
  <div className="cart">
    {PRODUCTS.map((product) =>{
        if(cartItems[product.id] !== 0){
            return <CartItem  data={product} />;
        }
    })}
  </div>
  {totalAmount > 0 ? (
    <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
    </div>
  ) : (
    <h1>Your shopping cart is empty</h1>
  )}

  </div>
  );

};
