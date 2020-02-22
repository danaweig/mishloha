import React, { useState, useContext } from 'react';
// import restLogo from '../../assets/images/restLogo.png';
// import restBg from '../../assets/images/restBg.jpg';
import phone from '../../assets/images/phone.png';
import star from '../../assets/images/star.png';
import './Hero.scss';
import { menuContext } from "contexts/store";

const Hero = (props) => {
    const { restaurantDetails } = useContext(menuContext);

    const [isOpened, updateOpened] = useState(true);
    const style = {
        'backgroundImage': 'url(' + restaurantDetails.heroImage + ')'
    };
    return (
        <div className="Hero" style={style}>
            <div className="restLogo">
                <img src={restaurantDetails.logo} alt="Restaurant logo" />
                <h1>{restaurantDetails.name}</h1>
            </div>
            <div className="restCaption">
                <div className="container">
                    <div className="flexRow">
                        <div className="rightCap">
                            <div className="flexRow">
                                <i><img src={star} alt="icon star" /></i>
                                <p>{restaurantDetails.name}</p>
                                <i><img src={phone} alt="icon phone" /></i>
                                <a href={`tel:${restaurantDetails.phone}`}> {restaurantDetails.phone}</a>
                            </div>
                        </div>
                        <div className="leftCap">
                            <ul className="flexRow">
                                <button>70 המלצות</button> |
                                <button>זמן ואזורי משלוח</button> |
                                <button>שעות פתיחה ואודות</button>
                                <span className={isOpened ? "restOpened" : "restClosed"}>
                                    {isOpened ? "פתוח" : "סגור"}
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;