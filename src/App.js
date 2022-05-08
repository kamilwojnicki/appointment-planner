import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([
    {
      name: 'Kamil',
      phone: '694661301',
      email: 'kamil@kamil.pl'
    },
    {
      name: 'Adam',
      phone: '333222333',
      email: 'adam@adam.pl'
    }
  ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  const addContact = (name, number, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        number: number,
        email: email
      }
    ]
    )
  };

  const addAppointments = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }
    ]);
  };
  /* sprawdzić czy z (prev) => też zadziała */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>

            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>

            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointments={addAppointments} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
