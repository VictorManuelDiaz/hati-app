import React from 'react';
import PersonalView from './personal.view';

class Personal extends React.Component {

  render() {
    const {
      idCard,
      name,
      email,
      phone,
      cellphone,
      handleChange,
      idCardError,
      nameError,
      emailError,
      phoneError,
      cellphoneError
    } = this.props;
    return (
      <PersonalView
        idCard={idCard}
        name={name}
        email={email}
        phone={phone}
        cellphone={cellphone}
        handleChange={handleChange}
        idCardError={idCardError}
        nameError={nameError}
        emailError={emailError}
        phoneError={phoneError}
        cellphoneError={cellphoneError}
      />
    );
  }
}

export default Personal;
