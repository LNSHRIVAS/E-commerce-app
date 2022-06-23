// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtUiqjMFyQTB2mULksjstle5VVxARr-6k",
    authDomain: "cln-b1e4c.firebaseapp.com",
    projectId: "cln-b1e4c",
    storageBucket: "cln-b1e4c.appspot.com",
    messagingSenderId: "799660955835",
    appId: "1:799660955835:web:815c4e508f518b306b319e",
    measurementId: "G-XVR7R1BQ3M"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export { db, auth};