import React, { Component } from 'react';
import AccountView from './account.view';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    const {
      email,
      password,
      passConfirm,
      emailE,
      passwordE,
      passConfirmE,
      handleChange
    } = this.props;

    return (
      <AccountView
        email={email}
        password={password}
        passConfirm={passConfirm}
        emailE={emailE}
        passwordE={passwordE}
        passConfirmE={passConfirmE}
        handleChange={handleChange}
      />
    );
  }
}

export default Account;
