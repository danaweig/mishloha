import React, { useContext } from 'react';

import './SummeryPage.scss';
import { menuContext } from '../../contexts/store.js';
import closeIcon from '../../assets/images/darkCloseIcon.svg';
import OrderSummary from 'components/OrderSummary/OrderSummary';
import Payment from 'components/Payment/Payment';



const SummerPage = () => {
  const { cartItems, removeFromCart } = useContext(menuContext);
  const addComments = (item) => {
    return (
      <p className="cart-item-comments"><b>הערות למנה: </b>{item.comments}</p>
    )
  }

  const addDishOwner = (item) => {
    return (
      <p className="cart-item-comments"><b>שם על המנה: </b>{item.dishOwner}</p>
    )
  }


  return (
    <>
      <div className="summery-page-container-cont">
        <div className="summery-page-container">
          <div className="cartContainerHeader">
            <h4>סיכום הזמנה</h4>
          </div>
          <>
            <div>
              {cartItems.map(item => {

                return (
                  <div className="summery-item">
                    <div className="summery-item-right">
                      <button className="removeFromCartBtn" onClick={() => (removeFromCart(item._id, item.cartQuantity))}><img src={closeIcon} alt="close" /></button>
                      <img className="cartItemIMG" src={item.image} />
                    </div>
                    <div className="summery-item-content">
                      <div className="summery-item-header">
                        <h4>{item.title}</h4>
                        <div className="summery-item-price-quantity"><span>₪{item.price}</span><span>x {item.cartQuantity}</span></div>
                      </div>
                      <p className="summery-item-description">{item.desc}</p>
                      <span>{item.comments !== "" ? (addComments(item)) : null}</span>
                      <span> {item.dishOwner !== "" ? (addDishOwner(item)) : null}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </>

        </div>
        <OrderSummary text="בצע הזמנה" payment />
      </div>
    </>
  );
}

export default SummerPage;