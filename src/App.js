import {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContacts = ({name, phone, email}) => {
    if(name && email && phone){
      const contactObj = {name, email, phone};
      setContacts((contacts) => [contactObj, ...contacts]);   
    }
    else {
      console.error("Error submitting null input into form");
    }
  }
  
  const addAppointments = ({title, contact, date, time}) => {
    if(!title || !contact || !date || !time) {
      console.error("Error submitting null input into form");
    }
    else {
      const appointmentObj = {title, contact, date, time};
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
