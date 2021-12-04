import reportsTypes from '../types/reports-types';

export const setReports = reports => {
  return {
    type: reportsTypes.SET_REPORTS,
    payload: reports
  };
};
