import React from "react";

export const ContactPicker = ({name, value, contacts, onChange}) => {
  // const [selectedContact, setSelectedContact] = useState([]);
  // const contactOptions = contacts.map((contact) => contact["name"]);
  return (
    <select id="contactsList" form="appointmentForm" name={name} value onChange={onChange}>
      <option name="default" value="">No Content Selected.</option>
      {contacts.map((contact, index) => (
        <option key={index} name={contact["name"]} value={contact}>{contact.name}</option>
      )) 
      // : <options>Please add more contacts...</options>
      }
    </select>
  );
};
