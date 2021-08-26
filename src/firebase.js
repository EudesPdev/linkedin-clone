import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPCjaGn12LPrSp1nbGEUgs2drTogc-bqw",
  authDomain: "linkedin-eudes-clone.firebaseapp.com",
  projectId: "linkedin-eudes-clone",
  storageBucket: "linkedin-eudes-clone.appspot.com",
  messagingSenderId: "930943263207",
  appId: "1:930943263207:web:9fb43295714a07d02add42",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
