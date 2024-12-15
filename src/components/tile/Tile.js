import React from "react";

export const Tile = (props) => {
  const {name, description} = props;
  return (
    <div className="tile-container">
      <p className="tile-tile">{name}</p>
      {Object.values(description).map((descItem, index) => (
        <p key={index} className="tile">{descItem}</p>
      )) 
    }
    </div>
  );
};
