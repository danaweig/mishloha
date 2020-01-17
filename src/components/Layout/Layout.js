import React from 'react';
import Header from '../Header/Header';

const layout = (props) => (
    <>
        <Header>Header</Header>
        <main>
            {props.children}
        </main>
        <footer>Footer</footer>
    </>
);

export default layout;