import React, {useState} from 'react';
import CartItem from '../Cart/CartItem.js';
import './Cart.scss';

let items = [{
  image: "images/dish1.jpg",
  name: "דאבל פרש רול",
  price: 32,
  size: "2 יחידות.",
  description: "אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
  id: "dish1"
},
];



const Cart = () => {
  let [quantity, setQuantity] = useState(1);
let increase = () => setQuantity(quantity + 1);
let decrease = () => setQuantity(quantity - 1);
  return (
    <div className="cartContainer">
      <div className="cartContainerHeader">
        <h4>פירוט ההזמנה</h4>
      </div>
      <div>
        {items.map((item, id )=> {
          return(
            <CartItem image={item.image}
                      name={item.name}
                      price={item.price}
                      size={item.size}
                      description={item.description}
                      key={item.id}
                      increase={increase}
                      decrease={decrease} />
        )})}
      </div>
    </div>

  )
}

export default Cart;