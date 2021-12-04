import emergencyTypes from '../types/emergency-types';

const initialState = {
  emergencies: []
};

const emergencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case emergencyTypes.SET_EMERGENCY:
      return {
        ...state,
        emergencies: action.payload
      };

    case emergencyTypes.CLEAR_EMERGENCY:
      return {
        ...state,
        emergencies: []
      };

    default:
      return state;
  }
};

export { emergencyReducer };
