import React from 'react';
import './Footer.scss';
import RestaurantDescription from './RestaurantDescription/RestaurantDescription';
import FooterCredit from './FooterCredit/FooterCredit';


const Footer = () => {
    return (
        <footer className="Footer">
            <RestaurantDescription />
            <FooterCredit />
        </footer>
    );
}

export default Footer;