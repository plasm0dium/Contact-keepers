import React, { Component } from 'react';

// Header component that render navigation bar
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Contact Keeper</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
