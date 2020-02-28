import React from 'react';
import './FooterCredit.scss';


const FooterCredit = () => {
    return (
        <div className="FooterCredit">
            <div className="container flexRow">
                <div className="">
                    <a href="https://www.mishloha.co.il"><i className="icon-logo"></i> משלוחה - כל תפריטי המשלוחים | משלוחי אוכל | הזמנת אוכל | 2005-2020 </a>
                </div>
                <div className="">
                    <p>UX &amp; Design by Mishloha</p>
                </div>
            </div>
        </div>
    );
}

export default FooterCredit;