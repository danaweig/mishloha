import React from 'react';
import './CartItem.scss';

const CartItem = () => {
  let quantity = 1;
  const cartItemDecByOne = () =>{ 
    return(
      quantity--
    )
  };

  const cartItemIncByOne = () =>{ 
    return(
      quantity++
    )
  };

  return (
    <div className="cartItem">
      <img className="cartItemIMG" src="images/dish1.jpg" />
      <div className="cartItemContent">
        <div className="cartItemHeader">
          <h4>דאבל פרש רול</h4>
          <span>32₪</span>
        </div>
        <p className="cartItemDescription"><span>2 יחידות.</span> <br/>
אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.</p>
        <div className="cartItemQuantity">
          <button onClick={cartItemDecByOne}>-</button>
          <span>{quantity}</span>
          <button onClick={cartItemIncByOne}>+</button>
          <button>🖊️</button>
          
        </div>
      </div>
    </div>
  )
}

export default CartItem;