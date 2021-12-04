import React, { Component } from 'react';
import TypeView from './type.view';

class Type extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    const { userType, userTypeE, handleChange } = this.props;

    return (
      <TypeView
        userType={userType}
        userTypeE={userTypeE}
        handleChange={handleChange}
      />
    );
  }
}

export default Type;
