import db from './config';
import Contacts from 'react-native-contacts';

const CONTACTS_KEY = 'contacts';

export const createConctacts = async (item, document) => {
  await db.collection(CONTACTS_KEY).doc(document).delete();
  await db.collection(CONTACTS_KEY).add(item);
}

export const getMyContacts = async (id, contacts) => {
  const querySnapshot = await db.collection(CONTACTS_KEY).where("user", "==", id).get();
  const myList = [];
  let selected = [];
  let key;
  querySnapshot.forEach((document) => {
    console.log
    key = document.id;
    selected = document.data().list;
    contacts.forEach((item) => {
      document.data().list.forEach((element) => {
        if (item.recordID == element) {
          myList.push(item);
        }
      });
    });
  });
  return { document: key, selected, myList };
};

export const getAllContacts = async (id) => {
  const contacts = await Contacts.getAll();
  const sortContacts = contacts.sort(function (a, b) {
    if (a.displayName > b.displayName) return 1;
    if (a.displayName < b.displayName) return -1;
    return 0;
  });
  const response = await getMyContacts(id, contacts);
  return { data: sortContacts, ...response };
}
