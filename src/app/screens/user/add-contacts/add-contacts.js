import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import AddContactsView from './add-contacts.view';
import { createConctacts } from '../../../../lib/data/contacts-data';

const initialState = {
  loading: true,
  selection: [],
  isSaving: false
};

class AddContacts extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }


  saveHandler = () => {
    if (this.state.selection.length > 0) {
      this.saveContacts();
    } else {
      ToastAndroid.show('Seleccione al menos un contacto', ToastAndroid.SHORT);
    }
  }

  selectContact = (index) => {
    let helperArray = this.state.selection;
    let itemIndex = helperArray.indexOf(index);
    if (helperArray.includes(index)) {
      helperArray.splice(itemIndex, 1);
    } else {
      helperArray.push(index);
    }
    this.setState({ selection: helperArray })
  }

  saveContacts = () => {
    this.setState({ isSaving: true });
    createConctacts({
      user: this.props.currentUser.id,
      list: this.state.selection
    }, this.props.contacts.document).then(() => {
      this.setState(initialState);
      this.props.navigation.goBack();
    });
  }

  render() {
    const { selection, isSaving } = this.state;
    const { contacts } = this.props;

    return (
      <AddContactsView
        isSaving={isSaving}
        contacts={contacts.data}
        selection={selection}
        selectContact={this.selectContact}
        saveHandler={this.saveHandler}
      />
    );
  }
  componentDidMount() {
    this.setState({selection: this.props.contacts.selected});
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.data,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(AddContacts);
