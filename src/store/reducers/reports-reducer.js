import reportsTypes from '../types/reports-types';

const initialState = {
  data: []
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case reportsTypes.SET_REPORTS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export { reportsReducer };
