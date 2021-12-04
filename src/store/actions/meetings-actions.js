import meetingsTypes from '../types/meetings-types';

export const setMeetings = meetings => {
  return {
    type: meetingsTypes.SET_MEETINGS,
    payload: meetings
  };
};

