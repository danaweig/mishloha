import React from 'react';
import './DishPopupDetails.scss';
import dish from '../../../assets/images/dish.jpg';


const DishPopupDetails = (props) => {

    return (

        <div className="DishPopupDetails">
            <div className="overlay"></div>
            <div className="flexRow">
                <div className="DishImage">
                    <img src={dish} alt="dish" />
                </div>
                <div className="DishDetails">
                    <h2>{props.title}</h2>
                    <p>{props.description} </p>
                    <p className="price"><span>{props.price}</span><span>₪</span></p>
                    <p>{props.tag}</p>
                    <p>LikeButton={props.liked} {props.likeCount} אהבו את זה</p>
                    <p>ChooseQuantity</p>
                </div>
            </div>
        </div>

    );
};

export default DishPopupDetails;