import React from "react";

export const ContactForm = ({
  name,
  setName,
  errMsgName,
  errorRefName,
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
        onChange={(e) => setName(e.target.value) }
        required>

        </input>
        <p ref={errorRefName} className={errMsgName ? "errmsg" :
                  "offscreen"} aria-live="assertive">{errMsgName}</p>
      </div>
      <div id="phoneInput">
        <label></label>
        <input 
        type="tel"
        id="telephoneNumberForm" 
        placeholder="#(123) 456-7890" 
        value={phone}
        pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}" 
        onChange={(e) => setPhone(e.target.value) }>

        </input>
      </div>          
      <div>
        <label></label>
        <input 
        type="text"
        id="emailForm" 
        placeholder="example@mail.com" 
        value={email}
        onChange={(e) => setEmail(e.target.value) }
        required>

        </input>
      </div>
      <button type="submit" disabled={errMsgName}>Submit</button>
    </form>
  );
};

