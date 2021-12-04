import React, { Component } from 'react';
import ClientsView from './clients.view';

class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <ClientsView/>
    );
  }
}

export default Clients;
