import db from './config';

const SCHE_KEY = 'schedules';

export const createSchedule = async (data) => {
  await db.collection(SCHE_KEY).add(data);
}

export const getProSchedule = async (id) => {
  const querySnapshot = await db.collection(SCHE_KEY).where("profession", "==", id).get();
  const times = [];
  querySnapshot.forEach((document) => {
    times.push({
      id: document.id,
      ...document.data()
    });
  });
  return times;
}

export const deleteSchedule = async (id) => {
  await db.collection(SCHE_KEY).doc(id).delete();
}
