import React, { useContext } from 'react';
import CartItem from '../Cart/CartItem.js';
import './Cart.scss';
import { menuContext } from '../../contexts/store.js';
//import MenuContextProvider from '../../contexts/store.js';



const Cart = () => {

  const { cartItems } = useContext(menuContext);

  const empty = () => {
    return (
      <div className="emptyCart">
        <img src="images/cartIcon.svg" />
        <p>הוסיפו פריטים להזמנה</p>
      </div>
    )
  }
  const full = () => {
    return (
      <>
        <div className="cartContainerHeader">
          <h4>פירוט ההזמנה</h4>
        </div>
        <>
          <div>
            {cartItems.map(item => {

              return (
                <CartItem image={item.image}
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                  key={item.id}
                  id={item.id}
                  itemQuantity={item.cartQuantity}
                  comment={item.comments}
                  owner={item.dishOwner}
                  item={item}
                />
              )
            })}
          </div>
        </>
      </>
    )
  }

  return (
    <div className="cartContainer">
      {cartItems.length < 1 ? (empty()) : (full())}
    </div>

  )
}

export default Cart;