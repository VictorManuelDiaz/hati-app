import sosTypes from '../types/sos-types';

const initialState = {
  history: []
};

const sosReducer = (state = initialState, action) => {
  switch (action.type) {
    case sosTypes.SET_SOS:
      return {
        ...state,
        history: action.payload
      };

    case sosTypes.CLEAR_SOS:
      return {
        ...state,
        history: []
      };

    default:
      return state;
  }
};

export { sosReducer };
