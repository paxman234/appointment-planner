import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-tile" value={props.name}></p>
      {props.description.values((descItem) => {
        <p className="tile" >{descItem}</p>
      })}
    </div>
  );
};
