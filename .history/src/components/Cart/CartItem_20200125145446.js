import React, {useState} from 'react';
import './CartItem.scss';

import DishPopup from '../DishPopup/DishPopup.js';

const CartItem = (props) => {

  let items = [{
    image: "images/dish1.jpg"
    name: "דאבל פרש רול",
    price: 32,
    quantity: "2 יחידות.",
    description: "אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
    id: "dish1"
  },];

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cartItem">
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