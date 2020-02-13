import React, { useState, useContext } from 'react';
import './CartItem.scss';

import { menuContext } from '../../contexts/store.js';

import DishPopup from '../DishPopup/DishPopup.js';
import CartItemQuantity from './CartItemQuantity.js';
import DishTag from 'components/DishTag/DishTag';

const CartItem = (props) => {
  const { cartItems, increaseCartQuantity, decreseCartQuantity } = useContext(menuContext);
  return (
    <div className="cartItem" >
      <img className="cartItemIMG" src={props.image} />
      <div className="cartItemContent">
        <div className="cartItemHeader">
          <h4>{props.title}</h4>
          <span>{props.price}₪</span>
        </div>
        <p className="cartItemDescription">{props.desc}</p>

        <div className="cartItemQuantity">
          <button onClick={<DishPopup />}>🖊️</button>
          <CartItemQuantity increase={() => increaseCartQuantity(props.id)}
            decrease={() => decreseCartQuantity(props.id)}
            itemQuantity={props.itemQuantity} />
<<<<<<< HEAD
        </div>
=======
>>>>>>> dish tag component added
        </div>
      </div>
      )
    }
    
export default CartItem;