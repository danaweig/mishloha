import React, {useContext} from 'react';
import './CategoryMenu.scss';
import {menuContext} from '../../contexts/store.js';

const CategoryMenu = () => {

  const {menuTitles} = useContext(menuContext);

  return (
    <nav className="CategoryMenu">
      <ul>
        {menuTitles.map(title => {return(<li key={title.id}><a href="#">{title.title}</a></li>)})}
      </ul>
    </nav>
  )
}

export default CategoryMenu;