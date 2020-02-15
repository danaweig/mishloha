import React, { useState, useContext } from 'react';
import './CartItemQuantity.scss';



const CartItemQuantity = (props) => {


  return (
    <div className="cartItemQuantity">
      <button onClick={props.increase}>+</button>
      <span>{props.itemQuantity}</span>
      <button onClick={props.decrease}>-</button>
    </div>
  )
}

export default CartItemQuantity;