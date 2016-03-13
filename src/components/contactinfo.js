import React, { Component } from 'react';

// Create table body and render information from firebase
const ContactInfo = (contact) => {
  let firstname = contact.contact.firstname,
      lastname = contact.contact.lastname,
      dateofbirth = contact.contact.DOB,
      phone = contact.contact.phone,
      email = contact.contact.email,
      notes = contact.contact.notes;
    return (
          <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{dateofbirth}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{notes}</td>
          </tr>
    )
}

export default ContactInfo;
