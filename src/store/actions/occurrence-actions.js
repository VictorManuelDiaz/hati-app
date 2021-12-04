import occurrenceTypes from '../types/occurrence-types';

export const setOccurrence = occurrence => {
  return {
    type: occurrenceTypes.SET_OCCURRENCE,
    payload: occurrence
  };
};
