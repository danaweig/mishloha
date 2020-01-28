import React from 'react';
import CartItem from '../Cart/CartItem.js';
import './Cart.scss';

let items = [{
  image: "images/dish1.jpg",
  name: "דאבל פרש רול",
  price: 32,
  quantity: "2 יחידות.",
  description: "אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
  id: "dish1"
},];

const Cart = () => {
  return (
    <div className="cartContainer">
      <div className="cartContainerHeader">
        <h4>פירוט ההזמנה</h4>
      </div>
      {items.map(item => { 
        (<CartItem image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          description={item.description} /> )})
    </div>

  )
}

export default Cart;