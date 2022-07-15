import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contacto}) => {
    return (
        <div>
            <p>Nombre/s: { contacto.nombre }</p>
            <p>Apellido: { contacto.apellido }</p>
            <p>email: { contacto.email }</p>
            <p>Conectado: { contacto.conectado ? "Contacto en Linea" : "Contacto No Disponible" }</p>
        </div>
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
