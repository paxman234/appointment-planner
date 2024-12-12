import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
const handleContact = (contact) => {
  setContact(contact);
}
  return (
    <form id="appointmentForm" onSubmit={handleSubmit}>
      <div>
        <input 
        type="text" 
        id="titleForm" 
        placeholder="name" 
        value={title}
        onChange={() => title ? setTitle(title) : ""}
        required>

        </input>
      </div>
      <div>
        <input 
        type="date" 
        id="dateForm" 
        placeholder="date" 
        min={getTodayString()}
        value={date}
        onChange={() => date ? setDate(date) : {}}
        required>
          
        </input>
      </div>
      <div>
        <input 
        type="time" 
        id="timeForm" 
        placeholder="time" 
        value={time}
        onChange={() => time ? setTime(time) : {}}
        required>
          
        </input>
      </div>
      <div>
        <ContactPicker name="contactPicker" value={contact ? contact.value : ""} handleContact={handleContact} contacts={contacts} />
      </div>
      <button id="appointmentFormBtn" type="submit">Submit</button>
    </form>
  );
};
