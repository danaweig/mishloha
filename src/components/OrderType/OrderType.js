import React, { useState } from 'react';
import '../../index.scss';
import './OrderType.scss';

const OrderType = (props) => {
    const [type, changeType] = useState(0); //0 for delivery and 1 for take away
    const deliveryContent = (
        <table>
            <tbody>
                <tr>
                    <td>זמן משלוח</td> <td><span> 40-60 דקות </span></td>
                </tr>
                <tr>
                    <td>דמי משלוח</td> <td><span>12 ₪ </span></td>
                </tr>
                <tr>
                    <td>דמי משלוח</td> <td><span>110 ₪ </span></td>
                </tr>

            </tbody>
        </table>
    );
    const takeawayContent = (
        <table>
            <tbody>
                <tr>
                    <td>זמן לאיסוף</td> <td><span> 30 דקות </span></td>
                </tr>
            </tbody>
        </table>
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