import React, { Component } from 'react';
import Firebase from 'firebase';

// Form component that render form from modal
class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      DOB: '',
      phone: '',
      email: '',
      notes: ''
    };

    this.firebaseRef = new Firebase('https://contact-keeper.firebaseio.com/contacts');
  }

  // Function that handle firstname input and assign input to current state
  handleFirstName(firstname){
    this.setState({
      firstname: firstname.target.value
    });
  }

  // Function that handle lastname input and assign input to current state
  handleLastName(lastname) {
    this.setState({
      lastname: lastname.target.value
    });
  }

  // Function that handle date of birth input and assign input to current state
  handleDOB(dob) {
    this.setState({
      DOB: dob.target.value
    });
  }

  // Function that handle phone input and assign input to current state
  handlePhone(phone) {
    this.setState({
      phone: phone.target.value
    });
  }

  // Function that handle email input and assign input to current state
  handleEmail(email) {
    this.setState({
      email: email.target.value
    });
  }

  // Function that handle notes input and assign input to current state
  handleNotes(notes) {
    this.setState({
      notes: notes.target.value
    });
  }

  // Function that handle submit input and push information to firebase
  handleSubmit(e) {
    e.preventDefault();
    this.firebaseRef.push({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      DOB: this.state.DOB,
      phone: this.state.phone,
      email: this.state.email,
      notes: this.state.notes
    });

    // Reassign state to empty string after submit information
    this.setState({
      firstname: '',
      lastname: '',
      DOB: '',
      phone: '',
      email: '',
      notes: ''
    });
  }

  render() {
    return(
      <div>
        <form className="input-group" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-md-6">
              <fieldset>
              <label className="col-md-6">First Name</label>
                <input
                  value={this.state.firstname}
                  onChange={this.handleFirstName.bind(this)}
                  type="text"
                  placeholder="First Name"
                required/>
              </fieldset>
              <br />
              <fieldset>
              <label className="col-md-6">Last Name</label>
                <input
                  value={this.state.lastname}
                  onChange={this.handleLastName.bind(this)}
                  type="text"
                  placeholder="Last Name"
                required/>
              </fieldset>
              <br />
              <fieldset >
              <label className="col-md-6">Date of birth</label>
              <input
                value={this.state.DOB}
                onChange={this.handleDOB.bind(this)}
                type="text"
                placeholder="dd/mm/yyyy"
              required/>
              </fieldset>
            </div>
            <div className="col-md-6">
              <fieldset>
              <label className="col-md-6">Phone Number</label>
                <input
                  value={this.state.phone}
                  onChange={this.handlePhone.bind(this)}
                  type="text"
                  placeholder="###-###-####"
                required/>
              </fieldset>
              <br />
              <fieldset>
              <label className="col-md-6">Email</label>
                <input
                  value={this.state.email}
                  onChange={this.handleEmail.bind(this)}
                  type="text"
                  placeholder="example@example.com"
                  required/>
              </fieldset>
            </div>
            <div className="col-md-12">
              <br />
              <fieldset>
                <label className="col-md-12">Notes</label>
                <input
                  value={this.state.notes}
                  onChange={this.handleNotes.bind(this)}
                  type="text" style= {{
                  width: '100%',
                  resize: 'none',
                  borderRadius: 3,
                  minHeight: 50,
                  color: '#555',
                  fontSize: 14,
                  outline: 'auto 0px'
                  }}
                  placeholder="Notes..."
                required/>
              </fieldset>
            </div>
            <div className="col-md-12">
              <br />
                <button
                 type="submit"
                 className="signup-button btn btn-primary"
                 >Save</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
