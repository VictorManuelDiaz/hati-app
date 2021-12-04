import authTypes from '../types/auth-types';

const initialState = {
  currentUser: null,
  currentPro: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case authTypes.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      };

    default:
      return state;
  }
};

const proUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_PRO_USER:
      return {
        ...state,
        currentPro: action.payload
      };

    default:
      return state;
  }
};

export { authReducer, proUserReducer };
