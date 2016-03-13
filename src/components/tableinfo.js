import React, { Component } from 'react';
import ContactInfo from './contactinfo';
import Firebase from 'firebase';
import _ from 'lodash';

// Table component that render all information from firebase in real time
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };

    this.firebaseRef = new Firebase('https://contact-keeper.firebaseio.com/contacts');
    this.firebaseRef.on("value", (dataSnapshot) => {
      var contactsVal = dataSnapshot.val();
      var contacts = _(contactsVal)
        .keys()
        .map((contactKey) => {
          var cloned = _.clone(contactsVal[contactKey]);
          cloned.key = contactKey;
          return cloned;
        })
        .value();

      this.setState({
        contacts: contacts
      })
    });
  }


  render() {
    let contactInfo = this.state.contacts.map((contact) => {
      return(
        <ContactInfo
          key={contact.email}
          contact={contact}
        />
      );
    });

    let filterContact = [];
    contactInfo.forEach((info) => {
      var contactObj = info.props.contact;
      if (contactObj.firstname.indexOf(this.props.filterText) !== -1 || contactObj.lastname.indexOf(this.props.filterText) !== -1 || contactObj.DOB.indexOf(this.props.filterText) !== -1 || contactObj.phone.indexOf(this.props.filterText) !== -1 || contactObj.email.indexOf(this.props.filterText) !== -1 || contactObj.notes.indexOf(this.props.filterText) !== -1) {
        filterContact.push(info);
      } else {
        return;
      }
    })

    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>{filterContact}</tbody>
        </table>
      </div>
    )
  }
}

export default Table;
