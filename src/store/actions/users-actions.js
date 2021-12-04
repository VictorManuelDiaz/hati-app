import usersTypes from '../types/users-types';

export const setUsers = users => {
  return {
    type: usersTypes.SET_USERS,
    payload: users
  };
};

export const clearUsers = () => ({
  type: usersTypes.CLEAR_USERS
});
