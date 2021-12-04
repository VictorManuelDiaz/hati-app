import db from './config';

const REPORTS_KEY = 'reports';

export const getMyReports = async (id) => {
  const querySnapshot = await db.collection(REPORTS_KEY).where("user", "==", id).get();
  const myList = [];
  querySnapshot.forEach((document) => {
    myList.push({
      id: document.id,
      createdAt: document.data().date.toDate().toLocaleDateString(),
      ...document.data()
    });
  });
  return myList;
};


export const createReport = async (data) => {
  await db.collection(REPORTS_KEY).add(data);
}

export const deleteReport = async (id) => {
  await db.collection(REPORTS_KEY).doc(id).delete();
}

