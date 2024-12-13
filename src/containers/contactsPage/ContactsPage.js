import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName ] = useState("");
  const [phone, setPhone ] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const isDuplicate = props.contacts.includes(name);
    if(name && isDuplicate) {
      console.log("This name is already taken.")
    }
    else {
      console.log(name);
    }
  }, [name])
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
  };
  //setter functions
  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePhone = (phone) => {
    setPhone(phone);
  };

  const handleName = (name) => {
    setName(name);
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name} 
        setName={handleName}
        phone={phone} 
        setPhone={handlePhone}
        email={email} 
        setEmail={handleEmail}
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
