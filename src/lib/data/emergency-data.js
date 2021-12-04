import db from './config';

const EMERGENCY_KEY = 'emergency_number';
const LOCATION_NUMBER_KEY = 'location_number';
const LOCATION_KEY = 'location';

export const getLocationNumbers = async () => {
  const querySnapshot = await db.collection(LOCATION_NUMBER_KEY).get();
  const locationNumbs = [];
  querySnapshot.forEach((document) => {
    locationNumbs.push({
      id: document.id,
      ...document.data(),
    });
  });
  return locationNumbs;
}

export const getLocations = async () => {
  const querySnapshot = await db.collection(LOCATION_KEY).get();
  const locations = [];
  querySnapshot.forEach((document) => {
    locations.push({
      id: document.id,
      ...document.data(),
    });
  });
  return locations;
}


export const getEmergencies = async () => {
  const querySnapshot = await db.collection(EMERGENCY_KEY).orderBy("name", "desc").get();
  const locationNumbs = await getLocationNumbers();
  const emergencies = [];
  querySnapshot.forEach((document) => {
    locationNumbs.forEach((item) => {
      if (item.number_id === document.id){
        emergencies.push({
          id: item.id,
          location: item.location_id,
          ...document.data(),
        });
      }
    });
  });
  return emergencies;
}