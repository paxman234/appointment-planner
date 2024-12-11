import React from "react";
import Tile from '../tile/Tile'
export const TileList = (props) => {
  props.tileList.map((tile, index) => {
    return (
      <div>
        <ul id="tileArray">
          <li key={index}>
            <Tile name={tile.name} description={tile.description}/>
          </li>
        </ul>
      </div>
    );
  })

};
