import React from 'react';
import './CategoryMenu.scss';

const CategoryMenu = () => {
  return (
    <nav className="CategoryMenu">
      <ul>
        <li><a href="#">סטריט פוד</a></li>
        <li><a href="#">אטריות ביצים</a></li>
        <li><a href="#">אטריות מיוחדות</a></li>
        <li><a href="#">אטריות אורז</a></li>
        <li><a href="#">אורז ועיקיות</a></li>
        <li><a href="#">קומבינציות</a></li>
        <li><a href="#">מרקים</a></li>
        <li><a href="#">גו נודלס טבעוני</a></li>
        <li><a href="#">גו נודלס ללא גלוטן</a></li>
        <li><a href="#">קינוחים</a></li>
        <li><a href="#">שתיה קלה</a></li>
        <li><a href="#">בירות</a></li>
      </ul>
    </nav>
  )
}

export default CategoryMenu;