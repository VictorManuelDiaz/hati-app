import meetingsTypes from '../types/meetings-types';

const initialState = {
  data: []
};

const meetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case meetingsTypes.SET_MEETINGS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export { meetingsReducer };
