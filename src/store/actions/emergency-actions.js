import emergencyTypes from '../types/emergency-types';

export const setEmergency = emergencies => {
  return {
    type: emergencyTypes.SET_EMERGENCY,
    payload: emergencies
  };
};

export const clearEmergency = () => ({
  type: emergencyTypes.CLEAR_EMERGENCY
});
