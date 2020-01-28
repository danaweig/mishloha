import React, { useState } from 'react';
import CartItem from '../Cart/CartItem.js';
import './Cart.scss';


// let items = [{
//   image: "images/dish1.jpg",
//   name: "דאבל פרש רול",
//   price: 32,
//   size: "2 יחידות.",
//   description: "אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
//   id: "dish1",
//   itemQuantity: Number ,
// },
// ];



const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([
    {
      image: "images/dish1.jpg",
      name: "דאבל פרש רול",
      price: 32,
      size: "2 יחידות.",
      description: "אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
      id: "dish1",
      itemQuantity: 1,
    },
    {
      image: "images/dish1.jpg",
      name: "דאבל פרש רול",
      price: 42,
      size: "3 יחידות.",
      description: "אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
      id: "dish2",
      itemQuantity: 1,
    },
  ])



  // const decreaseQuantity = (id) => {
  //   setQuantity(quantity - 1);
  //   // if (itemQuantity == 0) {
  //   //   const cart = [...cartItems];
  //   //   setCartItems(cart.splice(item.id, 1));
  //   // }
  // }


  return (
    <div className="cartContainer">
      {cartItems.length < 1 ?
        <div className="emptyCart">
          <img src="images/cartIcon.svg" />
          <p>הוסיפו פריטים להזמנה</p>
        </div> :
        <div className="cartContainerHeader">
          <h4>פירוט ההזמנה</h4>
        </div>
        
          {cartItems.map(item => {
            return (
              <CartItem image={item.image}
                name={item.name}
                price={item.price}
                size={item.size}
                description={item.description}
                key={item.id}
              // increase={() => setQuantity(item.itemQuantity=quantity + 1)}
              // decrease={() => setQuantity(item.itemQuantity=quantity - 1)}
              // itemQuantity = {item.itemQuantity} 
              />
            )
          })}
         
      }
    </div>

  )
}

export default Cart;