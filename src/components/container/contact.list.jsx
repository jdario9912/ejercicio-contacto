import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';

const ContactoListaComponent = () => {

  const contacto1 = new Contact('Joel Dario', 'Muñoz', 'joeldario9912@gmail.com', true);
  
  return (
    <div>
      <ContactComponent contacto = {contacto1}></ContactComponent>
    </div>
  )
}

export default ContactoListaComponent
