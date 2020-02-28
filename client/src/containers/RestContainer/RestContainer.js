import React from 'react';
import Menu from '../Menu/Menu';
import SummeryPage from '../../components/SummeryPage/SummeryPage';
import { BrowserRouter, Route } from 'react-router-dom';
import MenuContextProvider from '../../contexts/store.js';
import RestaurantDescription from 'components/RestaurantDescription/RestaurantDescription.js';
import Hero from '../../components/Hero/Hero.js'

function RestContainer() {
    return (
        <>
            <BrowserRouter>
                <MenuContextProvider>
                    <div className="RestContainer">
                        <Hero />

                        <Route exact path='/' component={Menu} />
                        <Route path='/payment' component={SummeryPage} />
                    </div>
                    <RestaurantDescription />

                </MenuContextProvider>
            </BrowserRouter>
        </>
    );
}

export default RestContainer;
