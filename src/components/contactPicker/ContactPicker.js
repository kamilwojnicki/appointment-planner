import React from "react";

export const ContactPicker = ({ contacts, handleChangeContact }) => {
  return (
    <label>
      Contact:
      <select onChange={handleChangeContact} >
      <option key='noselected' value="No contact selected" selected="selected">No contact selected</option>
      {contacts.map(el => (
      <option key={el.name} value={el.name}>{el.name}</option>
      ))}

    </select>
    </label>
  );
};
