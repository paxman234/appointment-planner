import React, { useState } from "react";

export const ContactPicker = (props) => {
  const [selectedContact, setSelectedContact] = useState("");
  return (
    <select name={props.name} value={selectedContact} onChange={e => setSelectedContact(e.target.value)}>
      <option value="">No Contact Selected</option>
      {props.contacts.map((contact) => {
        <option value={contact}>{contact.name}</option>
      })}
    </select>
  );
};
