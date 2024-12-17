import React from "react";

export const ContactPicker = ({name, value, contacts, onChange}) => {
  const handleSelectOption = (e) => {
    onChange(parseInt(e.target.value));
  }
  return (
    <select id="contactsList" 
    form="appointmentForm" 
    name={name} 
    value={value} 
    onChange={handleSelectOption} >
      <option name="default" value="">{name}</option>
      {contacts.map((index) => (
        <option key={index} name={contacts[index+1]?.name} value={value}></option>
        )
      )}
    </select>
  );
};
