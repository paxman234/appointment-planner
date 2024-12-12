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
    <form  id="contactForm" onSubmit={handleSubmit}>
      <div>
        <input 
        type="text" 
        id="nameForm" 
        placeholder="name" 
        value={name}
        onChange={() => name ? setName(name) : ""}
        required>

        </input>
      </div>
      <div>
        <input 
        type="tel"
        id="telephoneNumberForm" 
        placeholder="telephone number" 
        value={phone}
        pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}" 
        onChange={() => phone ? setPhone(phone) : ""}>

        </input>
      </div>          
      <div>
        <input 
        type="text" 
        id="emailForm" 
        placeholder="email" 
        value={email}
        onChange={() => email ? setEmail(email) : ""}
        required>

        </input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

