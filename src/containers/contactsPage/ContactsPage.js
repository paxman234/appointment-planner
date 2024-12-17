import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName ] = useState("");
  const [phone, setPhone ] = useState("");
  const [email, setEmail] = useState("");
  // useEffect(() => {
  // }, [])
  //handle contact form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = props.contacts.find((contact) => contact?.name === name);
    if(isDuplicate) {
      alert("Contact with the same name has already been submitted.");
    }
    else {
      const contactObj = {
        name: name,
        phone: phone,
        email: email
      };
      props.addContacts(contactObj);
      setName("");
      setPhone("");
      setEmail("");
    }
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
