import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'
import "./style.css"



function Contact() {
  const [contacts,setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts)
  },[contacts]);
 
  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contact = {contacts}/>
      <Form addContact = {setContacts} contact = {contacts}/>
    </div>
  )
}

export default Contact;
