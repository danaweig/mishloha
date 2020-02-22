import React, { useContext } from 'react';
import './RestaurantDescription.scss';
import Map from '../../assets/images/static-map.png';
import { menuContext } from "contexts/store";

const RestaurantDescription = () => {
    const { restaurantDetails } = useContext(menuContext);

    return (
        <div className="RestaurantDescription">
            <div className="container">
                <div className="flexRow">
                    <div className="restDesc">
                        <h2>{restaurantDetails.name}</h2>
                        <p>{restaurantDetails.description}</p>
                    </div>
                    <div className="map">
                        <img src={Map} />
                        <p className="tooltip">{restaurantDetails.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantDescription;