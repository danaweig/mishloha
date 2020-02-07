import React from "react";

const Title = () => {
  let Title = ["מוקפץ ירקות"];
  

  return (
    <div>
      {Title.map(Title => {
        return <div className="Dishtitle">{Title}</div>
      })}

    </div>
  );
};

export default Title;