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