import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName ] = useState("");
  const [number, setNumber ] = useState("#");
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && props.contacts.includes(name)) {name += " (duplicate)" };
    e.target.reset()
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name} 
        setName={setName}
        number={number} 
        setNumber={setNumber}
        email={email} 
        setEmail={setEmail}
        handleSubmit={handleSubmit} 
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
