import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import Header from './components/header';
import SearchBar from './components/searchbar';
import ContactForm from './components/modal';
import Table from './components/tableinfo';
import Footer from './components/footer';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { filterText: '' };
  }

  // Function that handle search bar input and set state to input
  onUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <SearchBar
              filterText={this.state.filterText}
              onUserInput={this.onUserInput.bind(this)}
            />
            <ContactForm />
          </div>
          <hr />
          <Table filterText={this.state.filterText} />
        </div>
        <Footer />
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>)
, document.getElementById('app'));
