import contactsTypes from '../types/contacts-types';

export const setContacts = contacts => {
  return {
    type: contactsTypes.SET_CONTACTS,
    payload: contacts
  };
};

