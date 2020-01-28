import React, {useState} from 'react';
import './CartItem.scss';

import DishPopup from '../DishPopup/DishPopup.js';

const CartItem = () => {

  let items = [{
    image: "images/dish1.jpg"
    name: "דאבל פרש רול",
    price: 32,
    quantity: "2 יחידות.",
    description: "אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
    id: "dish1"
  },];

  const [quantity, setQuantity] = useState(1);
  // const [isDisplayed, setDisplay] = useState(true);

  // if(quantity == 0){
  //   setDisplay(false);
  // }

  return (
    <div className="cartItem">
      <img className="cartItemIMG" src={items[1].image} />
      <div className="cartItemContent">
        <div className="cartItemHeader">
          <h4>דאבל פרש רול</h4>
          <span>32₪</span>
        </div>
        <p className="cartItemDescription"><span>2 יחידות.</span> <br/>
אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.</p>
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