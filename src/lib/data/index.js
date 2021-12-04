import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA0MlalerDgRDwq0kQlNec5O73KGUUbr5E",
  authDomain: "hati-app.firebaseapp.com",
  projectId: "hati-app",
  storageBucket: "hati-app.appspot.com",
  messagingSenderId: "60185220961",
  appId: "1:60185220961:web:e18098e43d21bf36da9720",
  measurementId: "G-HCJZ5HSPRP"
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
