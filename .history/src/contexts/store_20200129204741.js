import React, { useState, useContext } from "react";

export const menuContext = createContext() ;

const menuContextProvider = (props) => {

  const [menuItems, setMenuItems] = useState();

  return (
    <menuContext.provider>
      {props.children}
    </menuContext.provider>
  )
}