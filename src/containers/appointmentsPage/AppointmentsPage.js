import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentObj = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    props.addAppointments(appointmentObj);
    e.target.reset();
  };
  //setter functions
  const handleTitle = (title) => {
    setTitle(title);
  };

  const handleDate = (date) => {
    setDate(date);
  };

  const handleTime = (time) => {
    setTime(time);
  };
  const handleContact = (contact) => {
    setContact(contact);
  }
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm         
        title={title} 
        setTitle={handleTitle}
        contacts={props.contacts}
        contact={contact} 
        setContact={handleContact}
        date={date} 
        setDate={handleDate}
        time={time}
        setTime={handleTime}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={props.appointments}/>
      </section>
    </div>
  );
};