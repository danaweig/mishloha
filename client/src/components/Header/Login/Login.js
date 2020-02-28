import React, { Component, setState } from 'react';
import './Login.scss';
import visitorIcon from '../../../assets/images/nav-user.png';
import arrow from '../../../assets/images/dropdown_arrow.png';

class Login extends Component {
    state = {
        isOpened: false
    }
    toggleLogin = () => {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }
    render() {
        return (
            <div className={this.state.isOpened ? "LoginConainer opened" : "LoginConainer"}>
                <button className="LoginBtn" onClick={this.toggleLogin}><img src={visitorIcon} alt="search" />ערב טוב, אורח<img src={arrow} alt="arrow" /></button>
                <div className="LoginNav">
                    <ul>
                        <li><a href="/">התחברות / הרשמה</a></li>
                        <li><a href="/">שירות לקוחות</a></li>
                        <li><a href="/">צ'אט שירות לקוחות</a></li>
                    </ul>
                </div>
            </div >
        );
    }
}

export default Login;