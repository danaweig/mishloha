import React from 'react';
import './CustomerAddress.scss';
import icon_address from '../../../assets/images/icon_address.svg';



const CustomerAddress = () => {
    return (
        <div className="CustomerAddress">
            <a href="/"><img src={icon_address} /><span>כתובתי למשלוח:</span> אנא הכנס כתובת</a>
        </div>
    );
}

export default CustomerAddress;