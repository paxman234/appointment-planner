import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = ({contacts}) => {  

  return (
    <div>
      <ul id="tileArray">
        {contacts.map((contact, index) => {
        <li key={index}>
          <Tile id={index} name={contact.name} description={contact}/>
        </li>
        })}
      </ul>
    </div>

  )

};
