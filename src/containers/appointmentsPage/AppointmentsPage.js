import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState("");
  const [contact, setContact] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const appointmentObj = {
      name: name,
      contact: contact,
      date: date,
      time: time
    };
    props.addAppointments(appointmentObj);
    document.getElementById("appointmentForm").reset();

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm         
        name={name} 
        setName={setName}
        contact={contact} 
        setContact={setContact}
        date={date} 
        setDate={setDate}
        time={time}
        setTime={setTime}
        onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={props.appointments} />
      </section>
    </div>
  );
};