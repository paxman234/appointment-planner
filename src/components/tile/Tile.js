import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="title-title" value={props.name}></p>
      {props.description.map((descItem) => {
        <p className="title" value={descItem}></p>
      })}
    </div>
  );
};
