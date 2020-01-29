import React, { useState, createContext } from "react";

export const menuContext = createContext();

const menuContextProvider = (props) => {
  let menuTitles = [
    {
      id: 1,
      title: "סטריט פוד",
      desc: "לורם איפסום"
    },
    {
      id: 2,
      title: "אטריות מיוחדות",
      desc: "לורם איפסום"
    },
    {
      id: 3,
      title: "אטריות אורז",
      desc: "לורם איפסום"
    },
    {
      id: 4,
      title: "אורז ועיקיות",
      desc: "לורם איפסום"
    },
    {
      id: 5,
      title: "קומבינציות",
      desc: "לורם איפסום"
    },
    {
      id: 6,
      title: "אטריות ביצים",
      desc: "לורם איפסום"
    },
    {
      id: 7,
      title: "מרקים",
      desc: "לורם איפסום"
    },
    {
      id: 8,
      title: "גו נודלס טבעוני",
      desc: "לורם איפסום"
    },
    {
      id: 9,
      title: "גו נודלס ללא גלוטן",
      desc: "לורם איפסום"
    },
    {
      id: 10,
      title: "קינוחים",
      desc: "לורם איפסום",
    },
    {
      id: 11,
      title: "שתיה קלה",
      desc: "לורם איפסום",
    },
    {
      id: 12,
      title: "בירות",
      desc: "לורם איפסום",
    },
  ];

  

  return (
    <menuContext.provider value={{menuTitles}}>
      {props.children}
    </menuContext.provider>
  )
}

export default menuContextProvider