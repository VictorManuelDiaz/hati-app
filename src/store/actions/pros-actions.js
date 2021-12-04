import { prosTypes, reqsTypes } from '../types/pros-types';

export const setPros = pros => {
  return {
    type: prosTypes.SET_PROS,
    payload: pros
  };
};

export const setReqs = reqs => {
  return {
    type: reqsTypes.SET_REQS,
    payload: reqs
  };
};
