import locationsTypes from '../types/locations-types';

export const setLocations = locations => {
  return {
    type: locationsTypes.SET_LOCATIONS,
    payload: locations
  };
};

