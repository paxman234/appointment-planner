import React, { useState, useEffect, useRef } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName ] = useState("");
  const [phone, setPhone ] = useState("");
  const [email, setEmail] = useState("");
  const [errMsgName, setErrMsgName] = useState("");
  const errRefName = useRef();
  useEffect(() => {
    const contacts = props.contacts;
    const isDuplicate = contacts.find((contact) => contact?.name === name);
    isDuplicate ? setErrMsgName("Contact with the same name has already been submitted.") : setErrMsgName("");
    
  }, [name])
  //handle contact form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    const contactObj = {
      name: name,
      phone: phone,
      email: email
    };
    props.addContacts(contactObj);
    setName("");
    setPhone("");
    setEmail("");
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
        errMsgName={errMsgName}
        errRefName={errRefName}
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
