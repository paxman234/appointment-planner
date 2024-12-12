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
        id="nameForm" 
        placeholder="name" 
        value={props.contacts[-1].name}
        onChange={() => { name ? setName(name) : ""}}>

        </input>
      </div>
      <div>
        <input 
        type="tel"
        id="telephoneNumberForm" 
        placeholder="telephone number" 
        value={props.contacts[-1].number}
        pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}" 
        onChange={() => { phone ? setPhone(phone) : ""}}>

        </input>
      </div>          
      <div>
        <input 
        type="text" 
        id="emailForm" 
        placeholder="email" 
        value={props.contacts[-1].email}
        onChange={() => { email ? setEmail(email) : ""}}>
          
        </input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
