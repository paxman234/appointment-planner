import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName ] = useState("");
  const [phone, setPhone ] = useState("#");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const isDuplicate = props.contacts.name.includes(name);
    if(name && isDuplicate) {
      console.log("This name is already taken.")
    }
    else {
      console.log(name);
    }
  }, [name])
  const handleSubmit = (e) => {
    e.preventDefault();
    // if(name && props.contacts.includes(name)) {
    //   name += " (duplicate)";
    // }
    //set each property.
    e.target.reset()
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name} 
        setName={setName}
        phone={phone} 
        setPhone={setPhone}
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
