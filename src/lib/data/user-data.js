import firebase from './index';
import '@react-native-firebase/auth';
import db from './config';

const USER_KEY = 'user';
const PRO_KEY = 'profession';

export const queryUser = () => {
  return db.collection(USER_KEY);
};

export const queryPro = () => {
  return db.collection(PRO_KEY);
};

export const selectUser = async (userId) => {
  const document = await queryUser().doc(userId).get();

  if (document.exists) {
    const user = {
      id: document.id,
      ...document.data(),
    };
    return user;
  }
  else {
    return null;
  }
};


export const currentUser = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return user;
  }
  else {
    return null;
  }
};

export const signIn = async (email, password) => {
  await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const createUser = async (user, pro) => {
  const { email, password } = user;
  const result = await firebase.auth().createUserWithEmailAndPassword(email, password);

  await queryUser().doc(result.user.uid).set(user);
  if (user.type == 2) await queryPro().add({ user: result.user.uid, state: 0, ...pro, created: new Date() });

  return result.user.uid;
};


export const getUsers = async () => {
  const querySnapshot = await queryUser().get();
  const user = [];
  querySnapshot.forEach((document) => {
    user.push({
      id: document.id,
      ...document.data(),
    });
  });
  return user
}

export const getClients = async () => {
  const querySnapshot = await queryUser().where("type", "==", 1).get();
  const user = [];
  querySnapshot.forEach((document) => {
    user.push({
      id: document.id,
      ...document.data(),
    });
  });
  return user
}


export const signOut = async () => {
  await firebase.auth().signOut();
};

export const onAuthChanged = (response) => {
  firebase.auth().onAuthStateChanged(response);
};

