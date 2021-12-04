import React, { Component } from 'react';
import SettingsView from './settings.view';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {

    return (
      <SettingsView/>
    );
  }
}

export default Settings;
