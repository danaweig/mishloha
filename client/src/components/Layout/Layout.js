import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const layout = (props) => (
    <>
        <Header>Header</Header>
        <main>
            {props.children}
        </main>
        <Footer>Footer</Footer>
    </>
);

export default layout;