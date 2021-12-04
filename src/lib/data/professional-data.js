import db from './config';
import { getUsers } from './user-data';

const PRO_KEY = 'profession';

export const getProfessionals = async (state) => {
  const allUsers = await getUsers();
  const querySnapshot = await db.collection(PRO_KEY).where("state", "==", state).get();
  const professions = [];
  querySnapshot.forEach((document) => {
    allUsers.forEach((item) => {
      if (document.data().user.includes(item.id)) {
        professions.push({
          proId: document.id,
          createdAt: document.data().created.toDate().toLocaleDateString(),
          ...document.data(),
          ...item
        });
      }
    });
  });
  return professions;
}

export const getAProfessional = async (id) => {
  const querySnapshot = await db.collection(PRO_KEY).where("user", "==", id).get();
  const pro = [];
  querySnapshot.forEach((document) => {
    pro.push({
      id: document.id,
      createdAt: document.data().created.toDate().toLocaleDateString(),
      ...document.data()
    });
  });
  return pro[0];
}

export const updateProState = async (id, value) => {
  await db.collection(PRO_KEY).doc(id).update({ "state": value });
}
