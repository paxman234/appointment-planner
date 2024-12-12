import React from "react";
import Tile from '../tile/Tile'
export const TileList = (props) => {
  const {contacts, ...rest} = props;
  contacts.map((contact, index) => {
    return (
      <div>
        <ul id="tileArray">
          <li key={contact.name}>
            <Tile name={contact.name} description={rest}/>
          </li>
        </ul>
      </div>
    );
  })

};
