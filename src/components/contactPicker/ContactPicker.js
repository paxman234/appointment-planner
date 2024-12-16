import React from "react";

export const ContactPicker = ({name, value, contacts, onChange}) => {
  // const [selectedContact, setSelectedContact] = useState([]);
  // const contactOptions = contacts.map((contact) => contact["name"]);
  const handleSelectOption = (e) => {
    onChange(parseInt(e.target.value));
  }
  return (
    <select id="contactsList" 
    form="appointmentForm" 
    name={name} 
    selected={value ? value : ""} 
    onChange={handleSelectOption} >
      <option name="default" value="">No Content Selected.</option>
      {contacts.map((contact, index) => (
        <option key={index} name={contact["name"]} value={index}>{contact.name}</option>
      )) 
      // : <options>Please add more contacts...</options>
      }
    </select>
  );
};
