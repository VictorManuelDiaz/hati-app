import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PermissionsAndroid } from 'react-native';
import { setContacts } from '../../../../store/actions/contacts-actions';
import { getAllContacts } from '../../../../lib/data/contacts-data';
import TrustedContactsView from './trusted-contacts.view';

class TrustedContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  goAddContacts = () => {
    const { navigation } = this.props;
    navigation.navigate('AddContacts');
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


  render() {
    const { contacts } = this.props;
    return (
      <TrustedContactsView goAddContacts={this.goAddContacts} contacts={contacts.myList} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TrustedContacts);
