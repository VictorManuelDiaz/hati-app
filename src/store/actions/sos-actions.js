import sosTypes from '../types/sos-types';

export const setSos = history => {
  return {
    type: sosTypes.SET_SOS,
    payload: history
  };
};

export const clearSos = () => ({
  type: sosTypes.CLEAR_SOS
});
