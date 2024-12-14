import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = (props) => {
  const {contacts} = props;
  return (
    <ul id="tileArray">
      {contacts.map(({name, ...description} = contacts, index) => (
        <li key={index}>
          <Tile name={name} description={description} />
        </li>
        )
      )}
    </ul>
  )
};
