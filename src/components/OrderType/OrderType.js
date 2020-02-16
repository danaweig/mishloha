import React, { useState } from 'react';
import '../../index.scss';
import './OrderType.scss';

const OrderType = (props) => {
    const [type, changeType] = useState(0); //0 for delivery and 1 for take away
    const deliveryContent = (
        <>
            <div className="flexRow"><p className="col-50">זמן משלוח</p><p className="col-50"> 40-60 דקות </p></div>
            <div className="flexRow"><p className="col-50">דמי משלוח</p><p className="col-50"> 12 ₪ </p></div>
            <div className="flexRow"><p className="col-50">מינימום משלוח</p><p className="col-50"> 110 ₪  </p></div>

        </>
    );
    const takeawayContent = (
        <>
            <div className="flexRow"><p className="col-50">זמן לאיסוף</p><p className="col-50"> 30 דקות </p></div>

        </>
    );
    const changeOrderType = () => {
        if (type == 0)
            changeType(1);
        else {
            changeType(0);
        }
    }
    return (
        <div className="OrderType box">
            <button className="delivary" className={type == 0 ? 'active' : ''} onClick={changeOrderType}>משלוח</button>
            <button className="takaway" className={type == 1 ? 'active' : ''} onClick={changeOrderType}>איסוף עצמי</button>
            <div className="typeCaption">
                {type == 0 ? deliveryContent : takeawayContent}
            </div>
        </div>

    );
};

export default OrderType;