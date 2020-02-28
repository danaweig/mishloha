import React, { useContext } from 'react';
import './DishTag.scss';
import popularIcon from '../../assets/images/bestSellerIcon.png';
import vegeIcon from '../../assets/images/vegeterianIcon.png';
import veganIcon from '../../assets/images/veganicon.png';
import gfIcon from '../../assets/images/noGlutenIcon.png';

const tagTypes = [{
  id: 1,
  title: 'פופולרי',
  img: popularIcon,
},
{
  id: 2,
  title: "צמחוני",
  img: vegeIcon,
},
{
  id: 3,
  title: 'טבעוני',
  img: veganIcon,
},
{
  id: 4,
  title: 'ללא גלוטן',
  img: gfIcon,
}]

const DishTag = (props) => {
  return (
    <div className="dish-tags-container">
      {props.tag.map(tags => {
        const index = tagTypes.findIndex(item => item.id === tags);
        return (
          <>
          <img className="dish-tag-image" src={tagTypes[index].img} />
          <span className="dish-tag-desc" >{tagTypes[index].title}</span>
        </>
      )
      })}
    </div>
  )
}

export default DishTag;