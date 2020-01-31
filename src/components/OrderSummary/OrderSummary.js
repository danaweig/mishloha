import React, { useState } from 'react';
import '../../index.scss';
import './OrderSummary.scss';

const OrderSummary = (props) => {
    const type = 0; //0 for delivery and 1 for take away
    const deliveryContent = (
        <tr className="delivery_pay">
            <td>דמי משלוח</td> <td><span>12 ₪ </span></td>
        </tr>
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

    return (
        <div className="OrderSummary box">
            <table>
                <tbody>
                    {type == 0 ? deliveryContent : ''}
                    <tr>
                        <td>סה"כ</td> <td><span>110 ₪ </span></td>
                    </tr>

                </tbody>
            </table>

        </div>

    );
};

export default OrderSummary;