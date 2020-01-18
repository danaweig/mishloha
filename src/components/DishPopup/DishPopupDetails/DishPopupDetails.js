import React from 'react';
import './DishPopupDetails.scss';
import dish from '../../../assets/images/dish.jpg';


const DishPopupDetails = () => {

    return (

        <div className="DishPopupHeader">
            <div className="overlay"></div>
            <div className="flexRow">
                <div className="DishImage">
                    <img src={dish} alt="dish" />
                </div>
                <div className="DishDetails">
                    <h2>סלט שורשים גדול</h2>
                    <p>צנון, גזר פפאיה ירוקה, נבטים, ג'ינג'ר, בצל ירוק, וואסבי קראנץ' ושקדים מסוכרים ברוטב ג'ינג'ר גומה </p>
                    <p className="price"><span>44</span><span>₪</span></p>
                    <p>DishTag </p>
                    <p>LikeButton</p>
                    <p>ChooseQuantity</p>
                </div>
            </div>
        </div>

    );
};

export default DishPopupDetails;