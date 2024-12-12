import React from "react";

export const ContactPicker = (props) => {
  return (
    <select name={props.name} value={props.value} onChange={props.handleContact}>
      <option value="">No Contact Selected</option>
      {props.contacts.map((contact) => {
        <option value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
