import React, {useState} from 'react';
import CartItem from '../Cart/CartItem.js';
import './Cart.scss';


let items = [{
  image: "images/dish1.jpg",
  name: "דאבל פרש רול",
  price: 32,
  size: "2 יחידות.",
  description: "אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
  id: "dish1",
  itemQuantity: Number ,
},
];



const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  
  const decreaseQuantity = () => {
    () => setQuantity(quantity - 1);
    if (itemQuantity == 0) {
      
    }
  }
  if(itemQuantity == 0) {
    (item.id) => {
      const cart = [...items];
      cart.splice(itemIndex, 1);
      this.setState({ cart: cart });
  }
  }

  return (
    <div className="cartContainer">
      <div className="cartContainerHeader">
        <h4>פירוט ההזמנה</h4>
      </div>
      <div>
        {items.map(item=> {
          return(
            <CartItem image={item.image}
                      name={item.name}
                      price={item.price}
                      size={item.size}
                      description={item.description}
                      key={item.id}
                      increase={() => setQuantity(quantity + 1)}
                      decrease={decreaseQuantity}
                      itemQuantity = {quantity}  />
        )})}
      </div>
    </div>

  )
}

export default Cart;