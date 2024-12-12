import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentObj = {
      title: title,
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
        title={title} 
        setTitle={setTitle}
        contacts={props.contacts}
        contact={contact} 
        setContact={setContact}
        date={date} 
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={props.appointments} />
      </section>
    </div>
  );
};