import React from "react";

export const ContactPicker = ({name, value, contacts, onChange}) => {
  return (
    <select id="contactsList" 
    form="appointmentForm" 
    name={name} 
    value={value} 
    onChange={onChange} >
      <option name="default" value="">{name}</option>
      {contacts.map((contact, index) => (
        <option key={index}  value={contacts[index]?.name}>{contacts[index]?.name}</option>
        )
      )}
    </select>
  );
};
