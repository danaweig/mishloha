import React, { useContext } from 'react';
import './CategoryMenu.scss';
import { menuContext } from '../../contexts/store.js';

import Scrollspy from 'react-scrollspy';


const CategoryMenu = () => {

  const { menuTitles } = useContext(menuContext);

  return (
    <nav className="CategoryMenu">
      <Scrollspy currentClassName="is-current" items={menuTitles.map(item => { return (item._id) })} >
        {menuTitles.map(title => { return (<li key={title._id}><a href={'#' + title._id}>{title.title}</a></li>) })}
      </Scrollspy>
    </nav >
  )
}

export default CategoryMenu;