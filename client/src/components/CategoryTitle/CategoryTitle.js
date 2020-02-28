import React from 'react';
import './CategoryTitle.scss';

const CategoryTitle = (props) => {

    return (
        <div className="CategoryTitle box" id={props.id}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>

    );
};

export default CategoryTitle;