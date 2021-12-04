import { combineReducers } from 'redux';
import { authReducer, proUserReducer } from './auth-reducer';
import { emergencyReducer } from './emergency-reducer';
import { contactsReducer } from './contacts-reducer';
import { sosReducer } from './sos-reducer';
import { locationsReducer, departmentsReducer, municipalitiesReducer } from './locations-reducer';
import { crimeReducer, transportReducer, meansReducer, affectedReducer } from './occurrence-reducer';
import { reportsReducer } from './reports-reducer';
import { prosReducer, reqsReducer } from './pros-reducer';
import { usersReducer } from './users-reducers';
import { meetingsReducer } from './meetings-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  proUser: proUserReducer,
  emergency: emergencyReducer,
  contacts: contactsReducer,
  sos: sosReducer,
  locations: locationsReducer,
  departments: departmentsReducer,
  municipalities: municipalitiesReducer,
  crime: crimeReducer,
  transport: transportReducer,
  means: meansReducer,
  affected: affectedReducer,
  reports: reportsReducer,
  pros: prosReducer,
  reqs: reqsReducer,
  users: usersReducer,
  meetings: meetingsReducer
});

export default rootReducer;
