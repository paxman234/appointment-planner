import React from "react";

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

  return (
    <form id="appointmentForm" onSubmit={handleSubmit}>
      <div>
        <input 
        type="text" 
        id="titleForm" 
        placeholder="name" 
        value={props.title}
        onChange={() => { title ? setTitle(title) : ""}}>

        </input>
      </div>
      {/* <div>
        <input 
        id="contactForm" 
        placeholder="contact" 
        value={props.contact}
        onChange={() => { contact ? setContact(contact) : {}}}>

        </input>
      </div>           */}
      <div>
        <input 
        type="date" 
        id="dateForm" 
        placeholder="date" 
        min={getTodayString()}
        value={props.date}
        onChange={() => { date ? setDate(date) : {}}}>
          
        </input>
      </div>
      <div>
        <input 
        type="time" 
        id="timeForm" 
        placeholder="time" 
        value={props.time}
        onChange={() => { time ? setTime(time) : {}}}>
          
        </input>
      </div>
      <div>
        <ContactPicker name="contactPicker" value={props.contact[0]} handleContact={handleContact} contactsList={contacts} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
