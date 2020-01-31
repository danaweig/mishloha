import React from 'react';
import restLogo from '../../assets/images/restLogo.png';
import restBg from '../../assets/images/restBg.jpg';
import './Hero.scss';

const Hero = (props) => {
    const style = {
        'backgroundImage': 'url(' + restBg + ')'
    };
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
                                <p>גו נודלס תל אביב שדרות יהודית</p>
                                <a href="tel:03-3002532">03-3002532</a>
                            </div>
                        </div>
                        <div className="leftCap">
                            <ul className="flexRow">
                                <button>70 המלצות</button>
                                <button>זמן ואזורי משלוח</button>
                                <button>שעות פתיחה ואודות</button>
                                <button>סגור</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;