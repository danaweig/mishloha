import React from 'react';
import Logo from './Logo/Logo';
import './Header.scss';
import CustomerAddress from './CustomerAddress/CustomerAddress';
import SearchInput from './SearchInput/SearchInput';
import Login from './Login/Login';

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <div className="flexRow">
                    <Logo />
                    <CustomerAddress />
                    <SearchInput />
                    <Login />
                </div>
            </div>
        </header>
    );
}

export default Header;