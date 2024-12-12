import React from "react";

export const ContactPicker = (props) => {
  return (
    <select name={props.name} value={props.value} onChange={props.handleContact}>
      <option value="">No Contact Selected</option>
      {props.contact.map((cont) => {
        <option>{cont.name}</option>
      })}
    </select>
  );
};
