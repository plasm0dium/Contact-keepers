import React, { Component } from 'react';

// Search bar component that take in user input and pass it back to index
class SearchBar extends Component {

  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }

  render() {
    return(
      <div className="col-md-6">
        <div className="col-md-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={this.props.filterText}
                ref="filterTextInput"
                onChange={this.handleChange.bind(this)}
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
              </span>
            </div>
          </div>
      </div>
    )
  }
}

export default SearchBar;
