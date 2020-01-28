import React, {useState} from 'react';
import './CartItem.scss';

import DishPopup from '../DishPopup/DishPopup.js';

const CartItem = (props) => {




  return (
    <div className="cartItem" key={props.id}>
      <img className="cartItemIMG" src={props.image} />
      <div className="cartItemContent">
        <div className="cartItemHeader">
          <h4>{props.name}</h4>
          <span>{props.price}₪</span>
        </div>
        <p className="cartItemDescription"><span>{props.quantity}</span> <br/>
          {props.description}
        </p>
        <div className="cartItemQuantity">
          <button onClick={<DishPopup />}>🖊️</button>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          
          
        </div>
      </div>
    </div>
  )
}

export default CartItem;