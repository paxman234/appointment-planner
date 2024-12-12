import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = (props) => {
  const {contacts, ...rest} = props;
  
  return (
    <div>
      <ul id="tileArray">
        {contacts.map((contact, index) => {
        <li key={index}>
          <Tile name={contact.name} description={rest}/>
        </li>
        })}
      </ul>
    </div>

  )

};
