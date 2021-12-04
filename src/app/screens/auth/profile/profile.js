import React, { Component } from 'react';
import ProfileView from './profile.view';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {

    return (
      <ProfileView/>
    );
  }
}

export default Profile;
