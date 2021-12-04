import db from './config';
import { getProfessionals } from './professional-data';
import { getUsers } from './user-data';

const MEET_KEY = 'meetings';

export const createMeeting = async (data) => {
  await db.collection(MEET_KEY).add({created: new Date(), state: 0, ...data});
}

export const updateMeetState = async (id, value) => {
  await db.collection(MEET_KEY).doc(id).update({ "state": value });
}

export const deleteMeet = async (id) => {
  await db.collection(MEET_KEY).doc(id).delete();
}


export const getMeetingsByUser = async (user) => {
  const allPros = await getProfessionals(1);
  const querySnapshot = await db.collection(MEET_KEY).where("user", "==", user).get();
  const meetings = [];
  querySnapshot.forEach((document) => {
    allPros.forEach((item) => {
      if (document.data().profession.includes(item.proId)) {
        meetings.push({
          meetingId: document.id,
          createdAt: document.data().created.toDate().toLocaleDateString(),
          defaultDate: document.data().date.toDate().toLocaleDateString(),
          stateLabel: document.data().state == 0 ? 'Enviada' : (document.data().state == 1 ?'Aprobada' : 'Cancelada'),
          ...document.data(),
          ...item
        });
      }
    });
  });
  return meetings;
}

export const getMeetingsByPro = async (pro) => {
  const allUsers = await getUsers();
  const querySnapshot = await db.collection(MEET_KEY).where("profession", "==", pro).get();
  const meetings = [];
  querySnapshot.forEach((document) => {
    allUsers.forEach((item) => {
      if (document.data().user.includes(item.id)) {
        meetings.push({
          meetingId: document.id,
          createdAt: document.data().created.toDate().toLocaleDateString(),
          defaultDate: document.data().date.toDate().toLocaleDateString(),
          stateLabel: document.data().state == 0 ? 'Enviada' : (document.data().state == 1 ?'Aprobada' : 'Cancelada'),
          ...document.data(),
          ...item
        });
      }
    });
  });
  return meetings;
}
