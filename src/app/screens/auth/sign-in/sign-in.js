import React, { Component } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';
import GetLocation from 'react-native-get-location';
import { createUser } from '../../../../lib/data/user-data';
import SignInView from './sign-in.view';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: ['Tipo de cuenta', 'Datos personales', 'Datos profesionales', 'Datos del usuario'],
      currentStep: 0,
      proArray: [
        { label: 'Médico', value: 0 },
        { label: 'Psicólogo', value: 1 },
        { label: 'Abogado', value: 2 }
      ],
      daysArray: [
        { label: 'Lunes', value: 1 },
        { label: 'Martes', value: 2 },
        { label: 'Miércoles', value: 3 },
        { label: 'Jueves', value: 4 },
        { label: 'Viernes', value: 5 },
        { label: 'Sábado', value: 6 },
        { label: 'Domingo', value: 7 }
      ],
      userType: 0,
      idCard: '',
      name: '',
      lastName: '',
      cellphone: '',
      profession: '',
      attentionCenter: '',
      location: '',
      attentionDays: [],
      email: '',
      password: '',
      passConfirm: '',
      userTypeE: false,
      idCardE: false,
      nameE: false,
      lastNameE: false,
      cellphoneE: false,
      professionE: false,
      attentionCenterE: false,
      locationE: false,
      attentionDaysE: false,
      emailE: 0,
      passwordE: 0,
      passConfirmE: 0,
      imgSource: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      isLoading: false
    };
  }

  getPermissions = async () => {
    const geoPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (geoPermission == 'granted') return true; else return true;
  }

  handleLocation = async () => {
    try {
      const permission = this.getPermissions();
      if (permission) {
        this.getCurrentLocation();
      }
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    }).then(location => {
      this.setState({ location });
      console.log('location', location)
    }).catch(ex => {
      const { code } = ex;
      if (code === 'CANCELLED') {
        Alert.alert('Ubicación cancelada por el usuario o por otra solicitud');
      }
      if (code === 'UNAVAILABLE') {
        Alert.alert('El servicio de ubicación está inhabilitado o no disponible');
      }
      if (code === 'TIMEOUT') {
        Alert.alert('Se agotó el tiempo de espera de la solicitud de ubicación');
      }
      if (code === 'UNAUTHORIZED') {
        Alert.alert('Autorización denegada');
      }
    });
  }

  selectDays = (index) => {
    let helperArray = this.state.attentionDays;
    let itemIndex = helperArray.indexOf(index);
    if (helperArray.includes(index)) {
      helperArray.splice(itemIndex, 1);
    } else {
      helperArray.push(index);
    }
    this.setState({ attentionDays: helperArray })
  }

  redirectBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  goNext = () => {
    const { currentStep, userType } = this.state;
    let error = currentStep == 0 ?
      this.validateTypeSelection()
      :
      (
        currentStep == 1 ?
          this.validatePersonalFields()
          :
          (
            currentStep == 2 ?
              this.validateProFields()
              :
              this.validateAccountFields()
          )
      )
    if (!error) this.setState({ currentStep: (userType == 1 && currentStep == 1) ? currentStep + 2 : currentStep + 1 });
  }

  goBack = () => {
    const { currentStep, userType } = this.state;
    this.setState({ currentStep: (userType == 1 && currentStep == 3) ? currentStep - 2 : currentStep - 1 });
  }

  finishHandler = () => {
    const {
      userType, idCard, name, lastName,
      profession, attentionCenter, location,
      attentionDays, imgSource,
      cellphone, email, password
    } = this.state;
    let error = this.validateAccountFields();
    if (!error) {
      createUser(
        {
          type: userType,
          idCard,
          name,
          lastName,
          cellphone,
          avatar: imgSource,
          email,
          password
        },
        {
          profession,
          attentionCenter,
          location,
          attentionDays
        }
      ).then(() => {
        Alert.alert('Bienvenido!', 'Usuario creado con éxito.', [], { cancelable: true });
      }).catch((e) => {
        console.log(e)
      });;
    }
  };

  handleChange = (text, name) => {
    this.setState({ [name]: text });
  };

  validateTypeSelection = () => {
    const { userType } = this.state;
    let userTypeE = false;
    if (userType === 0) userTypeE = true; else userTypeE = false;

    this.setState({ userTypeE });
    if (!userTypeE) return false;
    else return true;
  }

  validatePersonalFields = () => {
    const { idCard, name, lastName, cellphone } = this.state;
    let idCardE = false, nameE = false, lastNameE = false, cellphoneE = false;

    if (idCard === '') idCardE = true; else idCardE = false;

    if (name === '') nameE = true; else nameE = false;

    if (lastName === '') lastNameE = true; else lastNameE = false;

    if (cellphone === '') cellphoneE = true; else cellphoneE = false;

    this.setState({ idCardE, nameE, lastNameE, cellphoneE });
    if (!idCardE && !nameE && !lastNameE && !cellphoneE) return false;
    else return true;
  }

  validateProFields = () => {
    const { profession, attentionCenter, location, attentionDays } = this.state;
    let professionE = false, attentionCenterE = false, locationE = false, attentionDaysE = false;

    if (profession === '') professionE = true; else professionE = false;

    if (attentionCenter === '') attentionCenterE = true; else attentionCenterE = false;

    if (location === '') locationE = true; else locationE = false;

    if (attentionDays.length === 0) attentionDaysE = true; else attentionDaysE = false;

    this.setState({ professionE, attentionCenterE, locationE, attentionDaysE });
    if (!professionE && !attentionCenterE && !locationE && !attentionDaysE) return false;
    else return true;
  }

  validateAccountFields = () => {
    const { email, password, passConfirm } = this.state;
    let emailE = false, passwordE = false, passConfirmE = false;

    if (email === '') emailE = 1;
    else if (!email.includes('@') || !email.includes('.')) emailE = 2;
    else emailE = 0;

    if (password === '') passwordE = 1;
    else if (password.length < 6) passwordE = 2;
    else passwordE = 0;

    if (passConfirm === '') passConfirmE = 1; else if (passConfirm != password) passConfirmE = 2; else passConfirmE = 0;

    this.setState({ emailE, passwordE, passConfirmE });
    if (emailE == 0 && passwordE == 0 && passConfirmE == 0) return false;
    else return true;
  }


  render() {
    const {
      steps,
      currentStep,
      proArray,
      daysArray,
      userType,
      idCard,
      name,
      lastName,
      cellphone,
      profession,
      attentionCenter,
      location,
      attentionDays,
      email,
      password,
      passConfirm,
      userTypeE,
      idCardE,
      nameE,
      lastNameE,
      cellphoneE,
      professionE,
      attentionCenterE,
      locationE,
      attentionDaysE,
      emailE,
      passwordE,
      passConfirmE,
      imgSource,
      isLoading
    } = this.state;

    return (
      <SignInView
        steps={steps}
        currentStep={currentStep}
        proArray={proArray}
        daysArray={daysArray}
        userType={userType}
        idCard={idCard}
        name={name}
        lastName={lastName}
        cellphone={cellphone}
        profession={profession}
        attentionCenter={attentionCenter}
        location={location}
        attentionDays={attentionDays}
        email={email}
        password={password}
        passConfirm={passConfirm}
        userTypeE={userTypeE}
        idCardE={idCardE}
        nameE={nameE}
        lastNameE={lastNameE}
        cellphoneE={cellphoneE}
        professionE={professionE}
        attentionCenterE={attentionCenterE}
        locationE={locationE}
        attentionDaysE={attentionDaysE}
        emailE={emailE}
        passwordE={passwordE}
        passConfirmE={passConfirmE}
        goNext={this.goNext}
        goBack={this.goBack}
        handleChange={this.handleChange}
        finishHandler={this.finishHandler}
        redirectBack={this.redirectBack}
        selectDays={this.selectDays}
        imgSource={imgSource}
        isLoading={isLoading}
        handleLocation={this.handleLocation}
      />
    );
  }
}

export default SignIn;
