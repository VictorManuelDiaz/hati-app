import usersTypes from '../types/users-types';

const initialState = {
  data: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersTypes.SET_USERS:
      return {
        ...state,
        data: action.payload
      };

    case usersTypes.CLEAR_USERS:
      return {
        ...state,
        data: []
      };

    default:
      return state;
  }
};

export { usersReducer };
