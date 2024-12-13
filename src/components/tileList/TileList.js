import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = ({contacts}) => {
  const [dataArray] = contacts;
  // const {description} = props;
  return (
    <div>
      <ul id="tileArray">
        {dataArray ? dataArray.map((dataObj, index) => {
          {const {name, ...description} = dataObj; 
          <li key={index}>
            <Tile id={index} name={name} description={description}/>
          </li>
          }
        }) : <li><p>Nothing to display...</p></li>}
      </ul>
    </div>

  )

};
