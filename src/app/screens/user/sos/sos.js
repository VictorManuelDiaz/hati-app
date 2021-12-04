import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native';
import { setContacts } from '../../../../store/actions/contacts-actions';
import { PermissionsAndroid } from 'react-native';
import { createSOS } from '../../../../lib/data/sos-data';
import GetLocation from 'react-native-get-location';
import SmsAndroid from 'react-native-get-sms-android';
import { getAllContacts } from '../../../../lib/data/contacts-data';
import SosView from './sos.view';

class Sos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getPermissions = async () => {
    const smsPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.SEND_SMS);
    const geoPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (smsPermission === 'granted' && geoPermission == 'granted') return true;
    else return true;
  }

  getContacts = async () => {
    const { setContacts, currentUser } = this.props;
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      );
      if (permission === 'granted') {
        const contacts = await getAllContacts(currentUser.id);
        setContacts(contacts);
      }
      else {
        console.log(permission)
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleSOS = async () => {
    const { contacts, navigation } = this.props;
    try {
      const permission = this.getPermissions();
      if (permission) {
        if(contacts.myList == undefined) {
          navigation.navigate('ContactsStack');
        }
        else {
          this.getCurrentLocation();
        }
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
      this.sendSOS();
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

  sendSOS = () => {
    const { location } = this.state;
    const { contacts, currentUser } = this.props;
    contacts.myList.forEach((item) => {
      SmsAndroid.autoSend(
        item.phoneNumbers[0].number,
        `SOS. Necesito tu ayuda. Mi ubicación es: http://www.google.com/maps/place/${location.latitude},${location.longitude}`,
        (fail) => {
          ToastAndroid.show('Alerta registrada!\nSu mensaje no pudo ser enviado!', ToastAndroid.SHORT);
        },
        (success) => {
          ToastAndroid.show('Alerta registrada!\nSu mensaje ha sido enviado!', ToastAndroid.SHORT);
        },
      );
    });
    createSOS({user: currentUser.id, location: location});
  }

  goHistory = () => {
    const { navigation } = this.props;
    navigation.navigate('SosStack');
  }

  render() {

    return (
      <SosView handleSOS={this.handleSOS} goHistory={this.goHistory} />
    );
  }
  componentDidMount() {
    this.getContacts();
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.data,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setContacts: contacts => dispatch(setContacts(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sos);
