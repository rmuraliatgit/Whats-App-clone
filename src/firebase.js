// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCADbDToL8jyyNIPKfCmlT80c_gEUVaidc",
  authDomain: "whats-app-76ad7.firebaseapp.com",
  projectId: "whats-app-76ad7",
  storageBucket: "whats-app-76ad7.appspot.com",
  messagingSenderId: "890881098366",
  appId: "1:890881098366:web:5648ea24394e0f92e20e2f",
  measurementId: "G-H62PEC6GDE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
