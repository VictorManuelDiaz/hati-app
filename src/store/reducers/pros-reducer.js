import { prosTypes, reqsTypes } from '../types/pros-types';

const initialState = {
  data: []
};

const prosReducer = (state = initialState, action) => {
  switch (action.type) {
    case prosTypes.SET_PROS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

const reqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case reqsTypes.SET_REQS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export { prosReducer, reqsReducer };
