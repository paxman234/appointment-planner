import {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
 const addContacts = (contactObj) => {
  setContacts((contacts) => [contactObj, ...contacts])
  // const contactNames = contacts.values();
  // if(contactNames.includes(contactObj.name)) {
  //   console.log("contact already added.");
  //   return;
  // }
  // else {
  //   contacts.filter(contact => contact.name !== contactObj.name);
  //   setContacts((prev) => [contactObj, ...prev]);
  // }

  // setContacts((prev) => {
  //   if (prev.includes(contactObj)) {
  //     return prev.filter(con => con.name !== contactObj.name);
  //   } else{
  //     return [contactObj, ...prev];
  //   }
  // });
 }
 const addAppointments = (appointmentObj) => {
  setAppointments((appointments) => [appointmentObj, ...appointments]);

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
