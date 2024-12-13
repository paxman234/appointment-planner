import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="title-title" value={name}></p>
      {description.values((descItem) => {
        <p className="title" >{descItem}</p>
      })}
    </div>
  );
};
