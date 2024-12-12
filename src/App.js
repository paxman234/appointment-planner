import {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
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
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContacts={addContacts} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointments={addAppointments} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
