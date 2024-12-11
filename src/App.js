import {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addContacts = (name, number, email) => {
  if(name && number && email) {
    const contactObj = {
      name: name,
      number: number,
      email: email
    };
    setContacts((contacts) => [contactObj, ...contacts]);
  }
 }
 const addAppointments = (name, contact, date, time) => {
  if(name && contact && date && time) {
    const appointmentObj = {
      name: name,
      contact: contact,
      date: date,
      time: time
    };
    setAppointments((appointments) => [appointmentObj, ...appointments]);
  }
 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContacts={addContacts} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointments={addAppointments} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
