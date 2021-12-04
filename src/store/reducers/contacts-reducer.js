import contactsTypes from '../types/contacts-types';

const initialState = {
  data: {}
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactsTypes.SET_CONTACTS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export { contactsReducer };
