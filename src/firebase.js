import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTi4mRC-0qoSdW_VGSEZ0vJueW602FoKk",
  authDomain: "challenge-fc83a.firebaseapp.com",
  projectId: "challenge-fc83a",
  storageBucket: "challenge-fc83a.appspot.com",
  messagingSenderId: "120977852828",
  appId: "1:120977852828:web:95a1987cd05bc7d1b3a059",
  measurementId: "G-5SJ75SZKGJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

let db = firebaseApp.firestore();
let auth = firebaseApp.auth();

export { db, auth }; 