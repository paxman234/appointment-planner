import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = (props) => {
  const {contacts} = props;
  return (
    <div>
      <ul id="tileArray">
        {contacts.map(({name, ...description} = contacts, index) => {
          // {const ; 
          <li key={index}>
            <Tile name={name} description={description}/>
          </li>
        }) //: <li><p>Nothing to display...</p></li>
        }
      </ul>
    </div>

  )

};
