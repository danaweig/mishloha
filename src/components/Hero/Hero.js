import React, { useState } from 'react';
import restLogo from '../../assets/images/restLogo.png';
import restBg from '../../assets/images/restBg.jpg';
import phone from '../../assets/images/phone.png';
import star from '../../assets/images/star.png';
import './Hero.scss';

const Hero = (props) => {
    const style = {
        'backgroundImage': 'url(' + restBg + ')'
    };
    const [isOpened, updateOpened] = useState(true);
    return (
        <div className="Hero" style={style}>
            <div className="restLogo">
                <img src={restLogo} alt="Restaurant logo" />
                <h1>גו נודלס תל אביב שדרות יהודית</h1>
            </div>
            <div className="restCaption">
                <div className="container">
                    <div className="flexRow">
                        <div className="rightCap">
                            <div className="flexRow">
                                <i><img src={star} alt="icon star" /></i>
                                <p>גו נודלס תל אביב שדרות יהודית</p>
                                <i><img src={phone} alt="icon phone" /></i>
                                <a href="tel:03-3002532">03-3002532</a>
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