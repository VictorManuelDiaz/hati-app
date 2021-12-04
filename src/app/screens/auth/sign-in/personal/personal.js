import React, { Component } from 'react';
import PersonalView from './personal.view';

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    const {
      idCard,
      name,
      lastName,
      cellphone,
      idCardE,
      nameE,
      lastNameE,
      cellphoneE,
      handleChange
    } = this.props;

    return (
      <PersonalView
        idCard={idCard}
        name={name}
        lastName={lastName}
        cellphone={cellphone}
        idCardE={idCardE}
        nameE={nameE}
        lastNameE={lastNameE}
        cellphoneE={cellphoneE}
        handleChange={handleChange}
      />
    );
  }
}

export default Personal;
