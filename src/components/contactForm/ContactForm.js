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

const handleChangeName = (e) => {
  setName(e.target.value)
};

const handleChangePhone = (e) => {
  
    setPhone(e.target.value)
  
  
};

const handleChangeEmail = (e) => {
  setEmail(e.target.value)
};


  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input
        name='name' 
        type='text'
        value={name}
        onChange={handleChangeName}
        />
      </label>
      <label>
        Phone:
        <input
        name='phone' 
        type='text'
        value={phone}
        onChange={handleChangePhone}
        pattern="[1-9][0-9]{2}-[0-9]{3}-[0-9]{3}"
        placeholder="Phone format: XXX-XXX-XXX"
        />
      </label><label>
        Email:
        <input
        name='email' 
        type='email'
        value={email}
        onChange={handleChangeEmail}
        />
      </label>
     
      <input type="submit" />


    </form>
  );
};
