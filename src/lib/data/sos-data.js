import db from './config';
import { format } from 'date-fns';

const SOS_KEY = 'sos';

export const createSOS = async (item) => {
  await db.collection(SOS_KEY).add({date: new Date(), ...item});
}

export const getHistory = async (id) => {
  const querySnapshot = await db.collection(SOS_KEY).where("user", "==", id).orderBy('date', 'desc').get();
  const history = [];
  querySnapshot.forEach((document) => {
    history.push({
      id: document.id,
      createdAt: document.data().date.toDate().toLocaleDateString(),
      hour: format(document.data().date.toDate(),'p'),
      ...document.data(),
    });
  });
  return history;
}

export const deleteAlert = async (id) => {
  await db.collection(SOS_KEY).doc(id).delete();
}
