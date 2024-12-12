import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <Form  id="contactForm" onSubmit={handleSubmit}>
      <div>
        <input 
        type="text" 
        id="nameForm" 
        placeholder="name" 
        value={props.name}
        onChange={() => { name ? setName(name) : ""}}>

        </input>
      </div>
      <div>
        <input 
        type="tel"
        id="telephoneNumberForm" 
        placeholder="telephone number" 
        value={props.number}
        pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}" 
        onChange={() => { phone ? setPhone(phone) : ""}}>

        </input>
      </div>          
      <div>
        <input 
        type="text" 
        id="emailForm" 
        placeholder="email" 
        value={props.email}
        onChange={() => { email ? setEmail(email) : ""}}>

        </input>
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};

