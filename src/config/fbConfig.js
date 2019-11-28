import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBWtvTojt7bz_omhMfGajGNjIOiY4QmNr0",
  authDomain: "jpapez-myplan.firebaseapp.com",
  databaseURL: "https://jpapez-myplan.firebaseio.com",
  projectId: "jpapez-myplan",
  storageBucket: "jpapez-myplan.appspot.com",
  messagingSenderId: "270279557307",
  appId: "1:270279557307:web:583aca62eaaf4ed3d3a99e",
  measurementId: "G-WKRFCGNH3Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;