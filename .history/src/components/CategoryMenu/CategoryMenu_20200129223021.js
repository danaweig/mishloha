import React, {useContext} from 'react';
import './CategoryMenu.scss';
import {menuContext} from '../../contexts/store.js';

const CategoryMenu = () => {
  // let menuTitle = [
  //   "סטריט פוד", 
  //   "אטריות ביצים", 
  //   "אטריות מיוחדות", 
  //   "אטריות אורז", 
  //   "אורז ועיקיות", 
  //   "קומבינציות", 
  //   "מרקים", 
  //   "גו נודלס טבעוני", 
  //   "גו נודלס ללא גלוטן", 
  //   "קינוחים", 
  //   "שתיה קלה", 
  //   "בירות"];

  const {titles} = useContext(menuContext);

  return (
    <nav className="CategoryMenu">
      <ul>
        {menuContext.menuTitles.map(title => {return(<li><a href="#">{title}</a></li>)})}
      </ul>
    </nav>
  )
}

export default CategoryMenu;