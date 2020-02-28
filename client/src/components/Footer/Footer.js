import React from 'react';
import './Footer.scss';
import FooterCredit from './FooterCredit/FooterCredit';


const Footer = () => {

    return (
        <footer className="Footer">
            <FooterCredit />
        </footer>
    );
}

export default Footer;