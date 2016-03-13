import React, { Component } from 'react';
import Form from './form';

// Modal component that render modal after click on add button
const ContactForm = () => {
    return(
      <div className="col-md-6">
        <button
          className="button btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
        >
        <span className="glyphicon glyphicon-plus-sign"></span> Contact Form
        </button>

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Contacts Keeper</h4>
            </div>
            <div className="modal-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ContactForm;
