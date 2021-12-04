import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileView from './profile.view';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { proUser } = this.props;

    return (
      <ProfileView profile={proUser} />
    );
  }
}

const mapStateToProps = state => ({
  proUser: state.proUser.currentPro,
});

export default connect(mapStateToProps, null)(Profile);

