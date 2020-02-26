import React, { useState, useContext, useEffect } from 'react';
import '../../index.scss';
import './OrderSummary.scss';
import arrowIcon from '../../assets/images/continue.png';
import {Link, NavLink} from 'react-router-dom';

import { menuContext } from "contexts/store";
import Payment from 'components/Payment/Payment';

const OrderSummary = (props) => {
    const { cartItems, isDelivery, restaurantDetails } = useContext(menuContext);

    const [sum, changeSum] = useState(0);
    const [showDelivery, changeDeliveryDisplay] = useState(false);

    const deliveryContent = (
        <div class="flexRow">
            <p className="col-50">דמי משלוח</p> <p className="col-50">{restaurantDetails.deliveryPrice} ₪ </p>
        </div>
    );
    useEffect(() => {
        let cartSum = 0;
        if (cartItems.length != 0) {
            cartSum = cartItems.reduce((acc, item) => { acc += parseInt(item.price) * parseInt(item.cartQuantity); return acc; }, 0);
            cartSum += parseInt(restaurantDetails.deliveryPrice) * isDelivery;
            changeDeliveryDisplay(isDelivery);
        } else {
            changeDeliveryDisplay(false);
        }
        changeSum(cartSum);
    }, [cartItems, isDelivery]);


    const style = {
        'backgroundImage': 'url(' + arrowIcon + ')'
    };
    return (
        <>
            <div className="OrderSummary box">

                {showDelivery ? deliveryContent : ''}
                <div className="flexRow">
                    <p className="col-50">סה"כ</p> <p className="col-50">{sum} ₪ </p>
                </div>
            </div>
            {props.payment ? <Payment /> : null}
            <NavLink to="/payment">
            <button className="continueOrder" >
                {!props.text ? "המשך" : props.text} <i style={style}></i>
            </button>
            </NavLink>
        </>
    );
};

export default OrderSummary;