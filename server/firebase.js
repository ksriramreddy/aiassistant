// const firebase = require('firebase')

// const firebaseConfig = {
//   apiKey: "AIzaSyCNg3kzOKgrZTW201PqO4Q2e95-SxDWPZQ",
//   authDomain: "ai-assistant-bb27d.firebaseapp.com",
//   projectId: "ai-assistant-bb27d",
//   storageBucket: "ai-assistant-bb27d.appspot.com",
//   messagingSenderId: "81247694041",
//   appId: "1:81247694041:web:23b337df9040f9ab1b62c8",
//   measurementId: "G-16KS5RE4VE"
// };

// const app = firebase.IntializeApp(firebaseConfig);

//  const Users = firebase.firestore().collection('users')
//  module.exports = Users;
 
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNg3kzOKgrZTW201PqO4Q2e95-SxDWPZQ",
  authDomain: "ai-assistant-bb27d.firebaseapp.com",
  projectId: "ai-assistant-bb27d",
  storageBucket: "ai-assistant-bb27d.appspot.com",
  messagingSenderId: "81247694041",
  appId: "1:81247694041:web:23b337df9040f9ab1b62c8",
  measurementId: "G-16KS5RE4VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
// const Users = collection(db, 'users');