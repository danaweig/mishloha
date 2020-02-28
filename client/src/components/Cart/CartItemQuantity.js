import React, { useState, useContext } from 'react';
import './CartItemQuantity.scss';



const CartItemQuantity = (props) => {


  return (
    <div className="cartItemQuantity">
      <button className="cartItemQuantityBtn" onClick={props.increase}>+</button>
      <span>{props.itemQuantity}</span>
      <button className="cartItemQuantityBtn" onClick={props.decrease}>-</button>
    </div>
  )
}

export default CartItemQuantity;