import React, { useState, useContext } from 'react';
import '../../index.scss';
import './OrderType.scss';
import { menuContext } from "contexts/store";

const OrderType = () => {
    const { isDelivery, updateDelivery, restaurantDetails } = useContext(menuContext);

    const deliveryContent = (
        <>
            <div className="flexRow"><p className="col-50">זמן משלוח</p><p className="col-50"> {restaurantDetails.deliveryTime} דקות </p></div>
            <div className="flexRow"><p className="col-50">דמי משלוח</p><p className="col-50"> {restaurantDetails.deliveryPrice} ₪ </p></div>
            <div className="flexRow"><p className="col-50">מינימום משלוח</p><p className="col-50"> {restaurantDetails.deliveryMinimum} ₪  </p></div>

        </>
    );
    const takeawayContent = (
        <>
            <div className="flexRow"><p className="col-50">זמן לאיסוף</p><p className="col-50"> {restaurantDetails.takeawayTime} דקות </p></div>
        </>
    );

    return (
        <div className="OrderType box">
            <button className="delivery" className={isDelivery ? 'active' : ''} onClick={() => { updateDelivery(true) }}>משלוח</button>
            <button className="takaway" className={!isDelivery ? 'active' : ''} onClick={() => { updateDelivery(false) }}>איסוף עצמי</button>
            <div className="typeCaption">
                {isDelivery ? deliveryContent : takeawayContent}
            </div>
        </div>

    );
};

export default OrderType;