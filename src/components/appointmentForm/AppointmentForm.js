import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  };
  
  const handleChangeDate = (e) => {
    
      setDate(e.target.value)
    
    
  };
  
  const handleChangeTime = (e) => {
    setTime(e.target.value)
  };

  const handleChangeContact = (e) => {
    setContact(e.target.value)
  };

  const today = getTodayString();

  return (
    <form onSubmit={handleSubmit} >
    <label>
      Title:
      <input
      name='title' 
      type='text'
      value={title}
      onChange={handleChangeTitle}
      />
    </label>
    <label>
      Date:
      <input
      name='date' 
      type='date'
      value={date}
      onChange={handleChangeDate}
      min={today}
      />
    </label><label>
      Time:
      <input
      name='time' 
      type='time'
      value={time}
      onChange={handleChangeTime}
      />
    </label>
   
    <ContactPicker contacts={contacts} handleChangeContact={handleChangeContact} />
    <input type="submit" />


  </form>
  );
};
