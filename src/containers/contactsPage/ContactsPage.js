import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName ] = useState("");
  const [number, setNumber ] = useState("#");
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    props.contacts.array.forEach(contact => {
      if(contact.name === name) {
        console.log("duplicate name entered")
      } else {
        console.log("no duplicate");
        setName(name);
      }
      return;
    });
    document.getElementById("contactForm").reset();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
