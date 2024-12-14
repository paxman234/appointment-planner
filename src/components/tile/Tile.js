import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-tile">{props.name}</p>
      {props.description.values((descItem) => {
        <p className="tile" >{descItem}</p>
      })}
    </div>
  );
};
