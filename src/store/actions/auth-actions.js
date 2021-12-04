import authTypes from '../types/auth-types';

export const setCurrentUser = user => {
  return {
    type: authTypes.SET_CURRENT_USER,
    payload: user
  };
};

export const setProUser = pro => {
  return {
    type: authTypes.SET_PRO_USER,
    payload: pro
  };
};

export const clearCurrentUser = () => ({
  type: authTypes.CLEAR_CURRENT_USER
});
